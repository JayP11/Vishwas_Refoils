import React, { useEffect } from 'react'
import HeroGroundnut from '../../component/hero_groundnut/HeroGroundnut';
import GroundnutSinglepro from '../../component/groundnut_singlepro/GroundnutSinglepro';
import { Helmet } from 'react-helmet';

const Groundnut = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Refined Groundnut Oil</title>
      </Helmet>
      <div>
        {/* <HeroGroundnut /> */}
        <GroundnutSinglepro />
      </div>
    </>
  );
}

export default Groundnut