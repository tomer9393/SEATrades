import React from "react";
//import { useParams } from "react-router-dom";

function Breadcrumb() {
  //const { name } = useParams();
    return (
      <>
      <div className="breadcrumb-area set-bg" style={{backgroundImage: `url(/img/hero/bg-homepage.jpg)`}}>
      <div className="container">
        <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h2 style={{textShadow: '2px 1px #000000'}} >Search Results</h2>
            </div>
        </div>
        <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
            <h1></h1>
            </div>
        </div>
      </div>
  </div>
  </>
    );
  }

export default Breadcrumb;