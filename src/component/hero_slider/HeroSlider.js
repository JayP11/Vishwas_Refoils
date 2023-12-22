import React from "react";
import "./HeroSlider.css";
import images from "../../constants/images";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HeroSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <div className="HeroSlider_main">
      <Slider {...settings}>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.sunflower_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100vw",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Sunflower Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.sunflower_hero_big}
                    className="product_image sunflowerimgherobig"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.groundnut_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100vw",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading product_heading_groundnut">
                  <h1>Double Filtered Groundnut Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.groundnut_hero_big}
                    className="product_groundnutimage"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.cotton_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100vw",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Cottonseed Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.cotton_hero_big}
                    className="product_image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.corn_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100vw",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Corn Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.corn_hero_big}
                    className="product_cornoilimage"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.palmolean_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100vw",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Palmolein Oil</h1>
                </div>
                {/* <AnimationOnScroll
                  animateIn="fadeInRight"
                  animateOut="animate__bounceOutLeft"> */}
                <div className="product_image_main">
                  <img
                    src={images.palmolean_hero_change_big}
                    className="product_image"
                    alt=""
                  />
                </div>
                {/* </AnimationOnScroll> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.soy_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100vw",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Soyabean Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.soya_hero_big}
                    className="product_image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
