import { defer, json, redirect, useRouteLoaderData, Await } from "react-router-dom"
import EventItem from '../components/EventItem';
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetailPage() {
    // const data = useRouteLoaderData('event-detail');
    const { event, events } = useRouteLoaderData('event-detail');

    return <>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Await resolve={event}>
                {loadedEvent => <EventItem event={loadedEvent} />}
            </Await>
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Await resolve={events}>
                {loadedEvents => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    </>
}

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({ message: 'Could not fetch details for selected event.' }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

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

export async function loader({ request, params }) {
    const id = params.eventId;

    return defer({
        event: await loadEvent(id), // this await makes sure that this component is not rendered before we fetch the data
        events: loadEvents()
    });
}

export async function action({ request, params }) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method,
    });

    if (!response.ok) {
        throw json({ message: 'Could not delete event.' }, { status: 500 });
    }

    return redirect('/events');
}