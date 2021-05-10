import React, { useEffect, useState } from "react";
import useGetNPSEvents from "../../hooks/use-get-nps-events";
import Layout from "../Globals/Layout";
import EventsCard from "./EventsCard";

function EventsPage() {
  const [eventList, setEventList] = useState(null);
  const list = useGetNPSEvents();
  let contents;

  useEffect(() => {
    setEventList(list);
  }, [list]);

  if (eventList) {
    contents = eventList.map((event) => {
      return (
        <EventsCard
          eventTitle={event.title}
          dateStart={event.datestart}
          dateEnd={event.dateend}
          desc={event.description.replace("<p>", "")}
          url={event.id}
        />
      );
    });
  }
  console.log(eventList);
  return (
    <Layout>
      <section class="block flex flex-col text-center">
        <h1 class="text-7xl m-4 text-rocky">Events</h1>
        <h4 class="text-xl text-rocky">Plan Your Visit</h4>
      </section>
      {contents ? contents : "Loading..."}
    </Layout>
  );
}

export default EventsPage;
