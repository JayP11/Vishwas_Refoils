import React, { useEffect } from "react";
import CornSinglepro from "../../component/corn_singlepro/CornSinglepro";
import { Helmet } from "react-helmet";

const Corn = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Refined Corn Oil</title>
      </Helmet>
      <div>
        {/* <HeroGroundnut /> */}
        <CornSinglepro />
      </div>
    </>
  );
};

export default Corn;
