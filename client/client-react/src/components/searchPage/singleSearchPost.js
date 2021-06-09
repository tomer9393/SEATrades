import React from "react";
import {Link} from "react-router-dom";
import { format } from "date-fns";

function SingleSearchPost(props) {
  const event = props.event; 
  var bg = event.imgUrl;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
  var soldOut = event.soldOut;
    return (
      <>
      <div className="col-lg-4 col-md-6">
      <div className="listing__item">
        <div className="listing__item__pic set-bg" style={{backgroundImage: `url(${bg})`}}>
          <Link to={'/Category/' + event.category}><div className="listing__item__pic__tag">{event.category}</div></Link>
        </div>
        <div className="listing__item__text" style={{textAlign: `left`}}>
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
          {
          soldOut==true
          ? <a to="/" className="disabledCursor" onClick={ (e) => e.preventDefault() }><img src="img/hero/tickets.png" alt=""></img>  0 tickets Available</a>
          : <Link className="listing__item__text__info__center" to={`/EventDetails/${event._id}`}>
            <img src="img/hero/tickets.png" alt=""></img> Buy Tickets
            </Link>
            }
          </div>
        </div>
      </div>
    </div>
    </>
    );
}

export default SingleSearchPost;
