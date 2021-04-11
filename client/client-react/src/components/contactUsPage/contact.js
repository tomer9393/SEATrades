import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="contact__widget">
                <div className="contact__widget__address">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <i className="fa fa-send" /> Eli Wiesel 2, Rishon Lezion
                    </li>
                    <li>
                      <i className="fa fa-envelope" /> contact@seatrades.com
                    </li>
                    <li>
                      <i className="fa fa-phone" />+972-52-537-666
                    </li>
                  </ul>
                </div>
                <div className="contact__widget__time">
                  <h4>Opening Hours</h4>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o" /> Mon - Fri: 6:30am -
                      07:45pm
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> Sat - Sun: 8:30am -
                      05:45pm
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <form action="#" className="contact__form">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input type="text" placeholder="Your Email" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
                <textarea placeholder="Message" defaultValue={""} />
                <button type="submit" className="site-btn">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__map">
              <iframe
          title="My map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12779.141461338724!2d34.77462410801682!3d31.96748838686271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b3f5eb44e1c1%3A0xfbe9b8c6bce59319!2z15TXnteh15zXldecINeU15DXp9eT157XmSDXlNee15vXnNec15Qg15zXnteZ16DXlNec!5e0!3m2!1siw!2sil!4v1613504947364!5m2!1siw!2sil"
          width="100%"
          height={560}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
