import React from "react";
// import moment from "moment";
// import {Link} from "react-router-dom";

class OurTeam extends React.Component {
  render() {
    return (
      <section className="team spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Our Specialist Team</h2>
                <p>
                  Our team of developers working around the clock so you could purchase tickets and attend to your favorite events!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team__item">
                <img src="img/team/Lee.jpg" alt="" />
                <span>DEVELOPER</span>
                <h5>Lee Liskar</h5>
                <div className="team__item__social">
                  <a href="https://www.facebook.com/lee.lisker">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="https://il.linkedin.com/in/lee-lisker?trk=people-guest_people_search-card" className="linkedin">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__item">
                <img src="img/team/Liraz.jpg" alt="" />
                <span>DEVELOPER</span>
                <h5>Liraz Mizrahi</h5>
                <div className="team__item__social">
                  <a href="https://www.facebook.com/profile.php?id=100000126047160">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="https://www.linkedin.com/public-profile/in/liraz-mizrachi-4550ab19a/?challengeId=AQHInthvquqtHwAAAXfjjlc43M4OGXrAiw0omC-GZOnDrAKdvcPllSfRPsoJJKTmHEVqerjZk-SZcFxNd9s6vh-UE9TQDZwIkA&submissionId=e4bdd9a3-fa9b-6716-02cc-225514685d0b" className="linkedin">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__item">
                <img src="img/team/Tomer.jpg" alt="" />
                <span>DEVELOPER</span>
                <h5>Tomer Israel</h5>
                <div className="team__item__social">
                  <a href="https://www.facebook.com/tomer9393">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="https://il.linkedin.com/public-profile/in/tomer-israel?trk=people-guest_people_search-card&challengeId=AQHXd3W7WgCpHAAAAXfjhdJgRyYI58ZLHjRBUSPlPYRYvMKN-t76i4IzplC1k5WwQA1nwk26zXUMatGTsp0vxybaoovq0iHUJw&submissionId=1ad381a1-789b-6716-3a49-ab28d10ce611" className="linkedin">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__item">
                <img src="img/team/Meital.jpg" alt="" />
                <span>DEVELOPER</span>
                <h5>Meital Zaguri</h5>
                <div className="team__item__social">
                  <a href="https://www.facebook.com/meital.zaguri1/">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTeam;
