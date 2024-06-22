import React, { useEffect } from "react";
import HeroSunflower from "../../component/hero_sunflower/HeroSunflower";
import SunflowerSinglepro from "../../component/sunflower_singlepro/SunflowerSinglepro";
import { Helmet } from "react-helmet";

const Sunflower = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Refined Sunflower Oil</title>
      </Helmet>
      <div>
        {/* <HeroSunflower /> */}
        <SunflowerSinglepro />
      </div>
    </>
  );
};

export default Sunflower;
