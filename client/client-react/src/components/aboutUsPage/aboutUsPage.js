import React from "react";
import AboutUs from './aboutUs';
import Breadcrumb from './breadcrumb';
import OurTeam from './ourTeam';
import { useEffect, useState, useContext } from "react";

function AboutUsPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        
        <>
        <Breadcrumb/>
        <AboutUs />
        <hr style={{width: '70%'}}></hr>
        <OurTeam />
        </>
    );
}

export default AboutUsPage;
