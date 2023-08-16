import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  // useLoaderData()는 loader()에서 반환한 값을 반환한다.
  const events = useLoaderData();
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;
