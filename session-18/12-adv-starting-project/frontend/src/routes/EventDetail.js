import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;
  return (
    <EventItem event={event}/>
  );
}

export default EventDetailPage;

export async function loader({request, params }) {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({message: "Could not fetch event."}, {status: 500})
  }
  else {
    return response;
  }
}
