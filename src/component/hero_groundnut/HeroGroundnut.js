import React from "react";
import images from "../../constants/images";
import "./HeroGroundnut.css";
const HeroGroundnut = () => {
  return (
    <section>
      <div
        className="hero_sunflower"
        style={{
          backgroundImage: `url(${images.sunflower})`,
          backgroundPosition: "center",
          backdropFilter: "blur(2px)",
          backgroundSize: "cover",
          width: "100vw",
          height: "40vh",
        }}>
        <div className="hero_heading">
          <h1>Double Filtered Groundnut Oil</h1>
        </div>
      </div>
     
    </section>
  );
};

export default HeroGroundnut;
