import React from "react";
import Breadcrumb from './breadcrumb';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../api/EventAPI.js";
import EventList from "../eventList/eventList";
import SeatMap from "./seatMap.js"


function EventDetails() {

  const { id } = useParams();
  const [event, setEvents] = useState();
  useEffect(() => {
    getEventById(id).then((res) => {
      setEvents(res.data);
    });
  }, [id]);

  return !event ? (
    <div>Loading...</div>
  ) : (
    <>
    <Breadcrumb event={event}/>
      <section className="about spad">
        <SeatMap></SeatMap>
      </section>
      </>
  );
  
}

export default EventDetails;
