import React from "react";
import { GrCalendar } from "react-icons/gr";

const EventsCard = ({ eventTitle, dateStart, dateEnd, desc, url }) => {
  return (
    <section className="mt-4 m-6">
      <div className="border-2 border-dustBunnyGreen m-auto lg:max-w-screen-lg rounded">
        <div className="ml-4">
          <h2 className="mt-2 text-2xl text-rocky">{eventTitle}</h2>
          <div className="flex w-10/12">
            <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">
              {desc}
            </p>
          </div>
          <div className="flex justify-between ">
            <div>
              <p className="flex leading-tight mt-6 text-sm">
                <GrCalendar className="mr-4" />
                <b>
                  {dateStart} - {dateEnd}
                </b>
              </p>
            </div>
            <button className="m-4 bg-dustBunnyGreen p-1 hover:shadow-lg hover:underline rounded-2xl text-white">
              <a
                href={`https://www.nps.gov/planyourvisit/event-details.htm?id=${url}`}
              >
                More Info
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCard;
