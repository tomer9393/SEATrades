import React from "react";
import AboutUs from './aboutUs';
import Breadcrumb from './breadcrumb';
import OurTeam from './ourTeam';

function AboutUsPage() {
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