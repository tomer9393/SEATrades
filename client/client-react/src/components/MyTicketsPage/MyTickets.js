import "../../../src/AppTicket.css";
import React from "react";

export default function MyTickets() {
  return (
    <>
      <p />
      <section className="container">
        <h1>My Tickets</h1>
        <div className="row">
          <article className="card fl-left">
            <section className="date">
              <time dateTime="23th feb">
                <span>23</span>
                <span>feb</span>
              </time>
            </section>
            <section className="card-cont">
              {/* <small>dj khaled</small> */}
              <h3>Omer Adam show</h3>
              <div className="even-date">
                <i className="fa fa-calendar" />
                <time>
                  <span>wednesday 28 december 2014</span>
                  <span>08:55pm to 12:00 am</span>
                </time>
              </div>
              <div className="even-info">
                <i className="fa fa-map-marker" />
                <p>nexen square for people australia, sydney</p>
              </div>
              <div className="row">
                <div className="four columns">f</div>
                <div className="four columns">d</div>
                <div className="four columns">f</div>
              </div>
              <a href="#">tickets</a>
            </section>
          </article>
          <article className="card fl-left">
            <section className="date">
              <time dateTime="23th feb">
                <span>23</span>
                <span>feb</span>
              </time>
            </section>
            <section className="card-cont">
              <small>dj khaled</small>
              <h3>corner obsest program</h3>
              <div className="even-date">
                <i className="fa fa-calendar" />
                <time>
                  <span>wednesday 28 december 2014</span>
                  <span>08:55pm to 12:00 am</span>
                </time>
              </div>
              <div className="even-info">
                <i className="fa fa-map-marker" />
                <p>nexen square for people australia, sydney</p>
              </div>
              <a href="#">tickets</a>
            </section>
          </article>
        </div>
        <div className="row">
          <article className="card fl-left">
            <section className="date">
              <time dateTime="23th feb">
                <span>23</span>
                <span>feb</span>
              </time>
            </section>
            <section className="card-cont">
              <small>dj khaled</small>
              <h3>music kaboom festivel</h3>
              <div className="even-date">
                <i className="fa fa-calendar" />
                <time>
                  <span>wednesday 28 december 2014</span>
                  <span>08:55pm to 12:00 am</span>
                </time>
              </div>
              <div className="even-info">
                <i className="fa fa-map-marker" />
                <p>nexen square for people australia, sydney</p>
              </div>
              <a href="#">booked</a>
            </section>
          </article>
          <article className="card fl-left">
            <section className="date">
              <time dateTime="23th feb">
                <span>23</span>
                <span>feb</span>
              </time>
            </section>
            <section className="card-cont">
              <small>dj khaled</small>
              <h3>hello dubai festivel</h3>
              <div className="even-date">
                <i className="fa fa-calendar" />
                <time>
                  <span>wednesday 28 december 2014</span>
                  <span>08:55pm to 12:00 am</span>
                </time>
              </div>
              <div className="even-info">
                <i className="fa fa-map-marker" />
                <p>nexen square for people australia, sydney</p>
              </div>
              <a href="#">cancel</a>
            </section>
          </article>
        </div>
        <p />
      </section>
    </>
  );
}
