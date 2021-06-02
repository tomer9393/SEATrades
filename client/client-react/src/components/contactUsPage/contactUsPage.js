import React from "react";
import Contact from "./contact";
import Breadcrumb from "./breadcrumb";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Newslatter from "./newslatter";

function ContactUsPage() {
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
