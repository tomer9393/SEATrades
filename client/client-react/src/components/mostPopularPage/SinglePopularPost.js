import React from "react";
import { format } from "date-fns";


function SingleEventPost(props) {
  const event = props.event; 
  var bg = event.imgUrl;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
    return (
      <>
      <div className="col-lg-4 col-md-6">
      <div className="listing__item">
        <div className="listing__item__pic set-bg"  style={{backgroundImage: `url(${bg})`}}>
          <img src="img/listing/list_icon-1.png" alt="" />
          <div className="listing__item__pic__tag">Popular</div>
          <div className="listing__item__pic__btns">
            <a href="#">
              <span className="icon_zoom-in_alt" />
            </a>
            <a href="#">
              <span className="icon_heart_alt" />
            </a>
          </div>
        </div>
        <div className="listing__item__text">
          <div className="listing__item__text__inside">
            <h5>{event.name}</h5>
            <div className="listing__item__text__rating">
              <div className="listing__item__rating__star">
                <span className="icon_star" />
                <span className="icon_star" />
                <span className="icon_star" />
                <span className="icon_star" />
                <span className="icon_star-half_alt" />
              </div>
              <h6>$40 - $70</h6>
            </div>
            <ul>
              <li>
                <span className="icon_pin_alt" /> {event.location}
              </li>
              <li>
                <span className="icon_phone" /> (+12)
                345-678-910
              </li>
            </ul>
          </div>
          <div className="listing__item__text__info">
            <div className="listing__item__text__info__left">
              <img
                src="img/listing/list_small_icon-1.png"
                alt=""
              />
              <span>{formattedDate}</span>
            </div>
            <div className="listing__item__text__info__right">
              Open Now
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  }

export default SingleEventPost;
