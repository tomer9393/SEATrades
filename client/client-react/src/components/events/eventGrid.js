import React from "react";

class EventGrid extends React.Component {
  render() {
    return (
      <div className="event-grids">
        <div className="col-md-3 event-grid">
          <div className="pic"> </div>
          <ul>
            <li className="hedding">Wembley Stadium</li>
            <li className="date">2 December 2014</li>
          </ul>
          <div className="clearfix"> </div>
        </div>
        <div className="col-md-4 event-grid small-text">
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet.
          </p>
        </div>
        <div className="col-md-2 event-grid large-text">
          <p className="text">$ 200 USD</p>
        </div>
        <div className="col-md-3 event-grid text-button">
          <ul>
            <li className="num">100 tickets Available</li>
            <li className="button yellow">
              <a href="#">Buy Ticket</a>
            </li>
          </ul>
        </div>
        <div className="clearfix"> </div>
      </div>
    );
  }
}

export default EventGrid;
