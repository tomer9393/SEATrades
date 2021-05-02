import React from "react";
import EventListPage from "../eventList/eventListPage";
//import Breadcrumb from './breadcrumb';
import { useEffect, useState } from "react";
import { getEventsByArtist } from "../../../api/EventAPI.js";

function EventPage() {
  const [events, setEvents] = useState();
  useEffect(
    () =>
    getEventsByArtist("Omer-Adam")
        .then((res) => res.data)
        .then((res) => setEvents(res)),
    []
  );


  return !events ? (
    <div>Loading...</div>
  ) : (
    <>
        <div className="breadcrumb-area set-bg" data-setbg="img/breadcrumb/breadcrumb-normal.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>{events.name}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <EventListPage></EventListPage>
      </>
    );
}

export default EventPage;
