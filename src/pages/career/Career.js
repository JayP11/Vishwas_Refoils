import React, { useEffect } from "react";
import HeroCareer from "../../component/hero_career/HeroCareer";
import Perks from "../../component/perks/Perks";
import images from "../../constants/images";
import FormCareer from "../../component/form_career/FormCareer";
import CareerForm from "../../component/careerform/CareerForm";
import { Helmet } from "react-helmet";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Careers</title>
      </Helmet>
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
    </>
  );
};

export default Career;
