import React, { useEffect } from "react";
import ContactUsCards from "../../component/contactus_cards/ContactUsCards";
import ContactUsmain from "../../component/contactusmain/ContactUsmain";
import { Helmet } from "react-helmet";
// import ContactUsmain from "../../component/contactusmai\bn/ContactUsmai\bn";

const ContactUS = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <> 
      <Helmet>
        <title>Vishwas Refoils | Contact Us</title>
      </Helmet>
      <div>
        <ContactUsCards />
        <ContactUsmain />
      </div>
    </>
  );
};

export default ContactUS;
