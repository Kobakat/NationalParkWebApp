import React from "react";
import Layout from "../Globals/Layout";
import EventsCard from "./EventsCard";

function EventsPage() {
  return (
    <Layout>
      <section class="block flex flex-col text-center">
        <h1 class="text-7xl m-4 text-rocky">Events</h1>
        <h4 class="text-xl text-rocky">Plan Your Visit</h4>
      </section>

      {/* TODO Rafael: generate events card according to how mnay there are. Giving you one to play with. Obviously can copy paste to make more events with the <EventsCard /> but we have different amounts per day or something - you know what I mean */}
      <EventsCard
        eventTitle="Gerding Birthday Bash"
        desc="An philanthropic event celebrating the greatness that is David Gerding the computer architecture legend."
        dateStart="December 7th, 2069"
        dateEnd="December 21st, 2070"
        url=""
      />
    </Layout>
  );
}

export default EventsPage;
