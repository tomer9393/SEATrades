import React from "react";
import { format } from "date-fns";
import {Link} from "react-router-dom";

function SinglePopularPost(props) {
  const event = props.event; 
  var bg = event.imgUrl;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
    return (
      <>
      <div className="col-lg-4 col-md-6">
      <div className="listing__item">
        <div className="listing__item__pic set-bg" style={{backgroundImage: `url(${bg})`}}>
          <img src="img/listing/list_icon-1.png" alt="" />
          <div className="listing__item__pic__tag">Popular</div>
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
              <li>
                <span className="icon_calendar" />
                {formattedDate}
              </li>
            </ul>
          </div>
          <div className="listing__item__text__info">
          <Link to={`/EventDetails/${event._id}`}>
          <a className="listing__item__text__info__center">
            <img src="img/hero/tickets.png" alt="" /> Buy Tickets
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  }

export default SinglePopularPost;
