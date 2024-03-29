import React from "react";
import {Link} from "react-router-dom";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="about__title">
                <h2>
                  Welcome to
                  <br /> SEATrades!
                </h2>
                <Link to="/Contact" className="primary-btn">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="about__text">
                <p>Have you ever bought an event ticket and could not attend  ? </p>
                <p>Got a ticket to the Champions League final monthes ahead and then find out that your best friend is getting married that day  ?</p>
                <p>You and your friends are going to see your favorite artist perform but you find out that your tickets are not in the same area  ?</p>
                <p>Have a ticket for a show but suddenly there is a rush at work and you prefer to go at a different time  ?</p>
                <h3>SEATrades is here for you !</h3>
                <br />
                <h5>SEATrades is a platform that centralizes the customer the options of buying and trading event tickets
                    in a unique, convenient and user-friendly interface.
                </h5>
                <div className="about__text">
                <h5>
                  Do you want to know how we do it? 
                  
                </h5>
                <span><Link to="/HowItWorks" className="primary-btn">
                  How It Works
                </Link></span>

              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
