import React from "react";
import EventGrid from "./eventGrid";
import Breadcrumb from './breadcrumb';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventsByName } from "../../../api/EventAPI.js";

function EventList() {

  const { name } = useParams();
  const [events, setEvents] = useState(undefined);

  useEffect(() => {
    getEventsByName(name).then((res) => {
      setEvents(res.data);
    });
  }, [name]);

  const singleEventsPosts = events?.map((event) => (
    <EventGrid key={event._id} event={event} />
  ));

  const event = events;


  return !events ? (
    <div>Loading...</div>
  ) : (
    <>
        <Breadcrumb event={event[0]} />
        <section className="about spad">
        <div className="container">
          <div className="col-lg-5 col-md-5">
            <div className="about__title">
            <h1>List Of Dates</h1>
            </div>
            <div className="col-lg-4 col-md-4">
              <div id="event" className="content-event">
              <div className="container">
                {singleEventsPosts}
              </div>
              </div>
          </div>
          </div>
        </div>
      </section>
      </>
    );
}

export default EventList;
