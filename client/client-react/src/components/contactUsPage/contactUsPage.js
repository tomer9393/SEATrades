import React from "react";
import Contact from "./contact";
import Breadcrumb from "./breadcrumb";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Newslatter from "../homePage/newslatter";
import { useEffect, useState, useContext } from "react";


function ContactUsPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Breadcrumb />
      <AlertProvider template={AlertTemplate}>
        <Contact />
      </AlertProvider>
      <Newslatter />
    </>
  );
}

export default ContactUsPage;
