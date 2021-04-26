import React, { useEffect, useState } from "react";
import getParkByActivity from "./get-park-by-activity";
import { Link } from "react-router-dom";
import Mountain from "../HomePage/images/icons8-mountain-48.png";
import "../HomePage/section-one.css";
import "../HomePage/home-page.css";
function ActivityList({ activity }) {
  const [parkList, setParkList] = useState([]);
  let content;
  useEffect(() => {
    const getParkList = async () => {
      try {
        const list = await getParkByActivity(activity.toString());
        setParkList(list);
        console.log(list);
      } catch (err) {}
    };
    getParkList();
  }, [activity]);

  if (parkList !== null) {
    content = parkList.map((parks) => {
      return parks.map((park) => {
        return (
          <section className="official-national-parks" key={park.parkCode}>
            <div className="section-div">
              <div className="column">
                <Link to={`/park/${park.parkCode}`}>
                  <div className="icon-bg">
                    <img src={Mountain} alt="Park" />
                  </div>
                  {/* Add text from nps api below inside of <b> tag */}
                  <b>{park.fullName}</b>
                </Link>
              </div>
            </div>
          </section>
        );
      });
    });
  }

  return <div>{parkList ? content : ""}</div>;
}

export default ActivityList;
