import React from "react";
import "./HomeBenifits.css";
import images from "../../constants/images";
import { AnimationOnScroll } from "react-animation-on-scroll";
const HomeBenifits = () => {
  return (
    <div
      className="home-benifit-sec"
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
      <div className="home_benifits_main">
        <div className="home_benifits_main">
          <div className="home_benifits_head">
            <div>
              <h1 className="red_heading" style={{ marginTop: "0px" }}>
                Benefits of vishwas Oil
              </h1>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>
                When it comes to your health, it's important that you
                choose wisely.
                <br /> Choose vishwas as a wise choice to support health.
              </p>
            </div>
          </div>
          <div className="home_benifits_desc">
            <div className="home_benifit_img_main">
              <img
                src={images.img_benifit}
                alt=""
                className="home_benifit_img"
              />
            </div>
            <div>
              <div className="benifits_box_main">
                <AnimationOnScroll
                  animateIn="fadeInRight"
                  animateOut="animate__bounceOutRight">
                  <div className="benifits_box">
                    <div className="box_item">
                      <div className="item_img_div">
                        <img
                          src={images.hands_holding_heart}
                          style={{ height: "5rem" }}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 style={{ marginTop: "-5px" }}>
                          Healthy Lifestyle
                        </h4>
                      </div>
                    </div>

                    <div className="box_item">
                      <div>
                        <img src={images.Cholesterol} />
                      </div>
                      <div>
                        <h4 style={{ marginTop: "10px" }}>
                          Helps You To Manage Your Cholesterol
                        </h4>
                      </div>
                    </div>
                  </div>
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="fadeInRight"
                  animateOut="animate__bounceOutRight">
                  <div className="benifits_box">
                    <div className="box_item">
                      <div>
                        <img src={images.dumbbell} />
                      </div>
                      <div>
                        <h4 style={{ marginTop: "11px" }}>
                          Complements Your Efforts To Stay Fit
                        </h4>
                      </div>
                    </div>
                    <div className="box_item">
                      <div>
                        <img src={images.food} />
                      </div>
                      <div>
                        <h4 style={{ marginTop: "10px" }}>
                          Brings Out Your Food's Natural Flavor
                        </h4>
                      </div>
                    </div>
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default HomeBenifits;
