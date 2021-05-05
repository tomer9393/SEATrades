import React from "react";
import Breadcrumb from './breadcrumb';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../api/EventAPI.js";
import EventList from "../eventList/eventList";

function EventDetails() {
  //const event = this.props.event; 
  //var bg = event.imgUrl;
  //var date = new Date(event.date);
  //var formattedDate = format(date, "dd/MM/yyyy");
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
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="about__title">
                <h2>
                  Welcome to
                  <br /> {event.name}
                </h2>
                <div className="col-lg-10 col-md-6">
                <div className="listing__item">
                  <div className="listing__item__pic set-bg" style={{backgroundImage: `url(${event.imgUrl})`}}>
                  </div>
                  <div className="listing__item__text">
                    <div className="listing__item__text__inside">
                      <h5>{event.name}</h5>
                      <div className="listing__item__text__rating">
                        <h6>Starting Price: ₪{event.minPrice}</h6>
                      </div>
                      <ul>
                        <li>
                          <span className="icon_pin_alt" /> {event.location}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
            </div>
          </div>
        </div>
      </section>
      </>
  );
}

export default EventDetails;
