import React from "react";

class Work extends React.Component {
  render() {
    return (
      <section className="work spad">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-12">
                <div className="how-it-works">
                <h2>Have you ever bought an event ticket and could not attend  ? </h2>
                <h2>Bought a ticket to the Champions League final and suddenly find out that your best friend is getting married that day  ?</h2>
                <h2>You and your friends are going to see your favorite artist perform but you found out that your tickets are not in the same area  ?</h2>
                <h2>Have a ticket for a show but suddenly there is a rush at work and you prefer to go at a different time  ?</h2>
                <h2>We are happy to introduce to you – </h2>
                <h1>SEATrades! </h1>
                <p>
                  A platform that centralizes the customer the options of buying and trading event tickets
                 in a unique, convenient and user-friendly interface. 
                </p>
                </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="work__item">
                <div className="work__item__number">01.</div>
                <img src="img/work/work-2.png" alt="" />
                <h5>Register & And get your EventID</h5>
                <p>
                  Register your info and the system will generate for you a unique QR-code with your info and that becomes your <b>EventID</b>.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work__item">
                <div className="work__item__number">02.</div>
                <img src="img/work/work-1.png" alt="" />
                <h5>Search & Book your seat</h5>
                <p>
                Now look for the event you would to go and purchase a ticket – the system will issue a unique ticket with your EventID.</p>
                <p>That way, only <b>YOU</b> can enter the event with this ticket. 
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work__item">
                <div className="work__item__number">03.</div>
                <img src="img/work/work-3.png" alt="" />
                <h5>Plans have changed?</h5>
                <p>
                <b>Trade your SEAT!</b>
                </p>
                <p>
                  Set your seat for trade and wait until someone else will ask for your seat.
                </p>
                <p>
                  If both sides are happy with the trade, the system will change the EventID on each ticket and deny any chance of profiteering and forgery on those tickets. 
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
