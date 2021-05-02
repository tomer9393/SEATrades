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

  const bg = events;


  return !events ? (
    <div>Loading...</div>
  ) : (
    <>
      <Breadcrumb bg={bg[0].imgUrl} />
      <div id="event" className="content-event">
        {}
        <div className="container">
          {singleEventsPosts}
        </div>
        {}
      </div>
      </>
    );
}

export default EventList;
