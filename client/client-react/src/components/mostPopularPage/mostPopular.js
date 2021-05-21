import SinglePopularPost from "./SinglePopularPost.js";
import { getNumOfEventsByCategory } from "../../api/EventAPI.js";
import React, { useEffect, useState } from "react";

function MostPopular() {
  const [name, setName] = React.useState("Concerts");
  const [events, setEvents] = useState(undefined);

  useEffect(() => {
    getNumOfEventsByCategory(name, 6).then((res) => {
      setEvents(res.data);
    });
  }, [name]);

  const SinglePopularPosts = events?.map((event) => (
    <SinglePopularPost key={event._id} event={event} />
  ));

  return !events ? (
    <div>Loading...</div>
  ) : (
    <>
      <section className="most-search spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Our Most Popular Events</h2>
                <p>
                  Here you can find all our top popular events in each category!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="most__search__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" >
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      onClick={() => setName("Concerts")}
                    >
                      <span className="flaticon2-microphone" />
                      Concerts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      onClick={() => setName("Festivals")}
                    >
                      <span className="flaticon2-hot-air-balloon" />
                      Festivals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      onClick={() => setName("Sport")}
                    >
                      <span className="flaticon2-football" />
                      Sport 
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-4"
                      role="tab"
                      onClick={() => setName("StandUp")}
                    >
                      <span className="flaticon2-microphone-1" />
                      StandUp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-5"
                      role="tab"
                      onClick={() => setName("Theatre")}
                    >
                      <span className="flaticon2-theater" />
                      Theatre
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" role="tabpanel">
                  <div className="row">
                  {SinglePopularPosts}
                  </div>
                </div>
              </div>
            </div>
          </div> 
          </div>
      </section>
      </>
  );
  }

export default MostPopular;
