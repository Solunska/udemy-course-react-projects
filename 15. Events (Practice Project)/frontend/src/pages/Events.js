import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
    const { events } = useLoaderData();

    return (
        // suspense can show a fallback while we wait for the events to be fetched
        <Suspense fallback={<h1>Loading...</h1>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events' };
        // throw new Response(JSON.stringify({message: 'Could not fetch events!'}), {status:500});
        return json({ message: 'Could not fetch events!' }, { status: 500 });
    } else {
        // return response; this does not work now because we are using defer
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return defer({
        events: loadEvents()
    });
}