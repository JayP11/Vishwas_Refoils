import React, { useEffect } from 'react'
import GoldPalmoleinSinglepro from '../../component/goldpalmolein_singlepro/GoldPalmoleinSinglepro'

const GoldPalmolein = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div><GoldPalmoleinSinglepro/></div>
  )
}

export default GoldPalmolein