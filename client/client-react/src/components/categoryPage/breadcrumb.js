import React from "react";
import { useParams } from "react-router-dom";

function Breadcrumb() {
  const { name } = useParams();
    return (
      <>
      <div className="breadcrumb-area set-bg" data-setbg="/img/hero/bg-homepage.jpg">
      <div className="container">
        <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h2 style={{textShadow: '2px 1px #000000'}}>{name}</h2>
            </div>
        </div>
        <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h1></h1>
            </div>
        </div>
      <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__text">
                <ul className="hero__categories__tags">
                  <li>
                    <a href="/Category/Concerts">
                      <img src="img/hero/cat-1.png" alt="" /> Concerts
                    </a>
                  </li>
                  <li>
                    <a href="/Category/Festivals">
                      <img src="img/hero/cat-2.png" alt="" /> Festivals
                    </a>
                  </li>
                  <li>
                    <a href="/Category/Sport">
                      <img src="img/hero/cat-3.png" alt="" /> Sport
                    </a>
                  </li>
                  <li>
                    <a href="/Category/StandUp">
                      <img src="img/hero/cat-4.png" alt="" /> StandUp
                    </a>
                  </li>
                  <li>
                    <a href="/Category/Theatre">
                      <img src="img/hero/cat-5.png" alt="" /> Theatre
                    </a>
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
