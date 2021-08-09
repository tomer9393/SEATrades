import React from "react";
import Breadcrumb from './breadcrumb';
import Work from './howItWorks';
import { useEffect, useState, useContext } from "react";

function HowItWorks() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        
        <>
        <Breadcrumb/>
        <Work />
        </>
    );
}

export default HowItWorks;
