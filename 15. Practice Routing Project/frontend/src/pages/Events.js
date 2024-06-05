import EventsList from "../components/EventsList"

const DUMMY_EVENTS = [
    {
        id: 'id1',
        image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_479977238_253066.jpg',
        title: 'Event 1',
        date: '12.12.1212'
    },
    {
        id: 'id2',
        image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_479977238_253066.jpg',
        title: 'Event 2',
        date: '12.12.1212'
    },
    {
        id: 'id3',
        image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_479977238_253066.jpg',
        title: 'Event 3',
        date: '12.12.1212'
    }
]

export default function EventsPage() {
    return <>
        <EventsList events={DUMMY_EVENTS} />
    </>
}