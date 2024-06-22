import React, { useEffect } from "react";
import SoyabeanSinglepro from "../../component/soyabean_singlepro/SoyabeanSinglepro";
import { Helmet } from "react-helmet";

const Soyabean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Refined Soyabean Oil</title>
      </Helmet>
      <div>
        <SoyabeanSinglepro />
      </div>
    </>
  );
};

export default Soyabean;
