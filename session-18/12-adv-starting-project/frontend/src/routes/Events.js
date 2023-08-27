import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  // useLoaderData()는 loader()에서 반환한 값을 반환한다.
  const data = useLoaderData();
  const events = data.events;

  // if (events.isError) {
  //   return <p>{events.message}</p>;
  // }
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not load events." };
    // throw new Error(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
