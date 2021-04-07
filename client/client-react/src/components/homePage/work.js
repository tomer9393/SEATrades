import React from "react";

class Work extends React.Component {
  render() {
    return (
      <section className="work spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>How Does It Work</h2>
                <p>
                  SEATrades is a Reliable ticket trading system for events.
                  A platform that centralizes the customer the option of buying and trading event tickets
                 in a uniform, convenient and user-friendly interface. 
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="work__item">
                <div className="work__item__number">01.</div>
                <img src="img/work/work-1.png" alt="" />
                <h5>Location & Categories</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work__item">
                <div className="work__item__number">02.</div>
                <img src="img/work/work-2.png" alt="" />
                <h5>Explore Listting</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work__item">
                <div className="work__item__number">03.</div>
                <img src="img/work/work-3.png" alt="" />
                <h5>Making Appointments</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
