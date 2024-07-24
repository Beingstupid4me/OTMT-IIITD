import React from "react";
import "./Eve.css";

import { Link } from "react-router-dom";

function Eve() {
  return (
    <div className="ehome">
      <section className="ehed">
        <div className="event">
          <h1>Events </h1>
          <div className="title_decoration"> hello</div>
        </div>
      </section>

      <section className="event_Cards">
        <div className="event_types">
          <div className="event_type1">
            <p>Upcoming Events</p>
            <p className="disc">
              {" "}
              Stay tuned for upcoming events. Coming up soon.
            </p>
          </div>

          <div className="event_type2">
            <p>Past Events</p>
            <p className="disc">
              {" "}
              Stay tuned for upcoming events. Coming up soon.
            </p>

            <div className="past_event">
                
            </div>
            <div className="past_event"></div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default Eve;
