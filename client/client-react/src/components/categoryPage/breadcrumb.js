import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

function Breadcrumb(props) {
  const name = props.name;
    return (
      <>
      <div className="breadcrumb-area set-bg" style={{backgroundImage: 'url(/img/hero/bg-homepage.jpg)'}}>
      <div className="container">
      <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h2>{name}</h2>
            </div>
        </div>
      <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__text">
                <ul className="hero__categories__tags">
                  <li>
                    <Link to="/Category/Concerts">
                      <img src="img/hero/cat-1.png" alt="" /> Concerts
                    </Link >
                  </li>
                  <li>
                    <Link to="/Category/Festivals">
                      <img src="img/hero/cat-2.png" alt="" /> Festivals
                    </Link >
                  </li>
                  <li>
                    <Link to="/Category/Sport">
                      <img src="img/hero/cat-3.png" alt="" /> Sport
                    </Link >
                  </li>
                  <li>
                    <Link to="/Category/StandUp">
                      <img src="img/hero/cat-4.png" alt="" /> StandUp
                    </Link >
                  </li>
                  <li>
                    <Link to="/Category/Theatre">
                      <img src="img/hero/cat-5.png" alt="" /> Theatre
                    </Link >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  </>
    );
  }

export default Breadcrumb;
