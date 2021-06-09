import React from "react";
import { useState } from "react";


function Newslatter() {

  const [subscribe, setSubscribe] = useState(false);

  function SubscribeClick(){
    setSubscribe(true)
  }

  return (
      <>
      <section className="newslatter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="newslatter__text">
                <h3>Subscribe Newsletter</h3>
                <p>Subscribe to our newsletter and don’t miss anything</p>
              </div>
            </div>
            {
            subscribe==false ?
            <div className="col-lg-6 col-md-6">
              <form action="#" className="newslatter__form">
                <input type="text" placeholder="Your email" />
                <button onClick={SubscribeClick}>Subscribe</button>
              </form>
            </div>
            : <div className="col-lg-6 col-md-6">
            <div className="newslatter__text">
              <h3>Thank you for your Subscription!</h3>
            </div>
            </div>
            } 
          </div>
        </div>
      </section>
      </>
  );
}

export default Newslatter;
