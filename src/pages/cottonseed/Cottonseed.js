import React, { useEffect } from 'react'
import Cottonseed_Singlepro from '../../component/cottonseed_singlepro/Cottonseed_Singlepro'
import { Helmet } from 'react-helmet';

const Cottonseed = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Refined Cottonseed Oil</title>
      </Helmet>
      <div>
        <Cottonseed_Singlepro />
      </div>
    </>
  );
}

export default Cottonseed