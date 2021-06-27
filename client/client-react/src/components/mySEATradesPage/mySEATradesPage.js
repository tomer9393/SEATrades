import React from "react";
import Breadcrumb from './breadcrumb';
import SeatTrades from './mySEATrades';

import { useEffect, useState, useContext } from "react";

function MySEATradesPage() {


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        
        <>
        <Breadcrumb/>
        <SeatTrades  />
        </>
    );
}

export default MySEATradesPage;
