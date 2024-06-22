import React, { useEffect } from "react";
import HeroAbout from "../../component/hero_about/HeroAbout";
import AboutUs from "./AboutUS.css";
import { Helmet } from "react-helmet";

const AboutUS = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Vishwas Refoils | About us</title>
      </Helmet>
      <HeroAbout />
    </div>
  );
};

export default AboutUS;
