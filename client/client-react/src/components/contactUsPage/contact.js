import React from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { createContact } from "../../api/ContactAPI";

export default function Contact() {
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [message, setMessage] = useState(undefined);
  const alert = useAlert();

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
                    <i className="fa fa-phone" />
                    +972-52-537-666
                  </li>
                </ul>
              </div>
              <div className="contact__widget__time">
                <h4>Opening Hours</h4>
                <ul>
                  <li>
                    <i className="fa fa-clock-o" /> Mon - Fri: 6:30am - 07:45pm
                  </li>
                  <li>
                    <i className="fa fa-clock-o" /> Sat - Sun: 8:30am - 05:45pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <form className="contact__form">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
              </div>
              <textarea
                placeholder="Message"
                defaultValue={""}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </form>
            <button
              onClick={() => {
                if (firstName && lastName && email && phone && message) {
                  createContact(firstName, lastName, email, phone, message);
                  alert.success("Message was sent successfuly");
                  setMessage("");
                  setEmail("");
                  setLastName("");
                  setFirstName("");
                  setPhone("");
                } else {
                  alert.error("Please fill all the fields");
                }
              }}
              className="site-btn"
            >
              SEND MESSAGE
            </button>
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

// export default withAlert()(Contact);
