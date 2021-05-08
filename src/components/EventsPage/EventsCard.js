import React from "react";
import { GrCalendar } from "react-icons/gr";

const EventsCard = ({ eventTitle, dateStart, dateEnd, desc, url }) => {
  return (
    <section class="mt-4 m-6">
      <div class="border-2 border-dustBunnyGreen m-auto lg:max-w-screen-lg rounded">
        <div class="ml-4">
          <h2 class="mt-2 text-2xl text-rocky">{eventTitle}</h2>
          <div class="flex w-10/12">
            <p class="overflow-hidden whitespace-nowrap overflow-ellipsis">
              {desc}
            </p>
          </div>
          <div class="flex justify-between ">
            <div>
              <p class="flex leading-tight mt-6 text-sm">
                <GrCalendar class="mr-4" />
                <b>
                  {dateStart} - {dateEnd}
                </b>
              </p>
            </div>
            <button class="m-4 bg-dustBunnyGreen p-1 hover:shadow-lg hover:underline rounded-2xl text-white">
              <a href={url}>More Info</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCard;
