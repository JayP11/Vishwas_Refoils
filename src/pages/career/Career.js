import React from "react";
import HeroCareer from "../../component/hero_career/HeroCareer";
import Perks from "../../component/perks/Perks";
import images from "../../constants/images";
import CareerForm from "../../component/careerform/CareerForm";

const Career = () => {
  return (
    <div
      className=""
      style={{
        // backgroundImage: `url(${images.section_bg1})`,
        backgroundImage: `url(${images.bg_image})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "cover",
        width: "100vw",
        // height: "34rem",
        // display: "flex",
        // alignItems: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}>
      <div>
        <HeroCareer />
        <Perks />
        {/* <FormCareer /> */}
        <CareerForm />
      </div>
    </div>
  );
};

export default Career;
