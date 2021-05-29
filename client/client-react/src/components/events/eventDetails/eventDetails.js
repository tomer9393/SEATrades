import React from "react";
import Breadcrumb from './breadcrumb';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../api/EventAPI.js";
import EventList from "../eventList/eventList";
import SeatMap from "./seatMap3.js"


function EventDetails(props) {

  const { id } = useParams();
  const [event, setEvents] = useState(undefined);
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
        <SeatMap event={event}></SeatMap>
      </section>
      </>
  );
  
}

export default EventDetails;
