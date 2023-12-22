import React from "react";
import "./HomeAbout.css";
import images from "../../constants/images";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div
      className=""
      style={{
        // backgroundImage: `url(${images.section_bg1})`,
        backgroundImage: `url(${images.bg_image})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "cover",
        // width: "100vw",
        // height: "34rem",
        // display: "flex",
        // alignItems: "center",
        paddingTop: "4rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="home_about_main">
        <AnimationOnScroll
          animateIn="fadeInLeft"
          animateOut="animate__bounceOutRight"
        >
          <div className="home_about_details">
            <div>
              <h1 className="red_heading heading_about">
                Take care of your health with vishwas Oils
              </h1>
            </div>
            <div>
              <p className="heading_about" style={{textAlign:"justify"}}>
                One of the first stage to general wellness is having a healthy
                life. With vishwas, who supports your efforts to live a
                health-conscious lifestyle, make healthy life your top priority!
              </p>
            </div>
            <div className="Knowmore_btn">
              <Link to="/AboutUS" type="button" className="red_button" style={{padding:8,textDecoration:"none"}}>
                Know more
              </Link>
            </div>
          </div>
        </AnimationOnScroll>

        {/* <AnimationOnScroll
          animateIn="fadeInRight"
          animateOut="animate__bounceOutRight"
        > */}
          <div className="home_about_img_main">
            <img
              src={images.family_homeabout}
              alt=""
              className="home_about_img"
            />
          </div>
        {/* </AnimationOnScroll> */}
      </div>
    </div>
  );
};

export default HomeAbout;
