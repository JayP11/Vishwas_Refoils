import React from "react";
import images from "../../constants/images";
import "./HeroSunflower.css";
const HeroSunflower = () => {
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
          <h1>Refined Sunflower Oil</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSunflower;
