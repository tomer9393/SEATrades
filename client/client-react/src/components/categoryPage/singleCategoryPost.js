import React from "react";
import {Link} from "react-router-dom";


function SingleCategoryPost(props) {
  const event = props.event; 
  var bg = event.imgUrl;
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
            <h5>{event._id}</h5>
            <div className="listing__item__text__rating">
              <h6>Starting Price: ₪{event.minPrice}</h6>
            </div>
          </div>
          <div className="listing__item__text__info">
          <Link className="listing__item__text__info__center" to={`/EventsList/${event._id}`}>
            <img src="img/hero/tickets.png" alt=""></img> See Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
    );
}

export default SingleCategoryPost;
