import { Link, redirect, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const params = useParams();

  // const submit = useSubmit();

  const { data, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;

      await queryClient.cancelQueries({ queryKey: ['events', params.id] });
      const previousEvent = queryClient.getQueryData(['events', params.id]); // currently stored data, for rollbacks 

      queryClient.setQueryData(['events', params.id], newEvent);

      return { previousEvent } // the context
    }, // optimistic updating
    onError: (error, data, context) => {
      queryClient.setQueryData(['events', params.id], context.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id]);
    }
  })

  const navigate = useNavigate();

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate('../');
    // submit(formData, { method: 'PUT' }); // this is needed if we use routing for triggering the action
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isError) {
    content = <>
      <ErrorBlock title="Could not load data for event" message={error.info?.message || 'Could not load the data. Try again later'} />
      <Link to='/events' className='button'>
        Okay
      </Link>
    </>
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(['events']);

  return redirect('../')
}