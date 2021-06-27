import React from "react";
import Breadcrumb from './breadcrumb';
import Tickets from './MyTickets';
import { useEffect, useState, useContext } from "react";

function MyTicketsPage() {


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        
        <>
        <Breadcrumb/>
        <Tickets  />
        </>
    );
}

export default MyTicketsPage;
