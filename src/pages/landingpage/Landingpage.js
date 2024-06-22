import React, { useEffect } from "react";
import Hero from "../../component/hero/Hero";
import "./Landingpage.css";
import OurProducts from "../../component/ourproducts/OurProducts";
import Testimonial from "../../component/testimonial/Testimonial";
import Journey from "../../component/journey/Journey";
import AvailableOn from "../../component/availableon/AvailableOn";
import HomeAbout from "../../component/home_about/HomeAbout";
import HomeBenifits from "../../component/home_benifits/HomeBenifits";
import HeroSlider from "../../component/hero_slider/HeroSlider";
import { Helmet } from "react-helmet";

const Landingpage = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Home</title>
      </Helmet>
      {/* <Hero /> */}
      <HeroSlider />
      <HomeAbout />
      <OurProducts />
      <Journey />
      <HomeBenifits />
      {/* <Testimonial /> */}
      <AvailableOn />
    </>
  );
};

export default Landingpage;
