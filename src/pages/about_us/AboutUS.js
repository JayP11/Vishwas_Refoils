import React, { useEffect } from "react";
import HeroAbout from "../../component/hero_about/HeroAbout";
import AboutUs from "./AboutUS.css";

const AboutUS = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroAbout />
    </div>
  );
};

export default AboutUS;
