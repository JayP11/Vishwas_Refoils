import React from "react";
import "./AvailableOn.css";
import Slider from "react-slick";
import images from "../../constants/images";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const AvailableOn = () => {
  //   var settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     //   autoplay: true,
  //     //   autoplaySpeed: 2000,
  //     responsive: [
  //       {
  //         breakpoint: 1000,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           autoplay: true,
  //           autoplaySpeed: 2000,
  //         },
  //       },
  //       {
  //         breakpoint: 850,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           autoplay: true,
  //           autoplaySpeed: 2000,
  //         },
  //       },
  //       {
  //         breakpoint: 650,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           autoplay: true,
  //           autoplaySpeed: 2000,
  //         },
  //       },
  //     ],
  //   };
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
        paddingBottom: "3rem",
      }}>
      <section className="sec_available_main">
        <div className="feature-head-part">
          <p className="availableon_red_heading " style={{ marginTop: "0px" }}>
            AVAILABLE ON
          </p>
        </div>
        {/* <AnimationOnScroll
          animateIn="fadeInRight"
          animateOut="animate__bounceOutRight"
        > */}
        <div className="available_main">
          <div className="available_main_img">
            <Link to="https://udaan.com/org/ORG4YBQXY00EVC2CZR3M0TKHDNN6B?af=food_and_fmcg">
              <img
                className="avail-img avail-img2"
                src={images.udaan_logo}
                alt=""
              />
            </Link>
          </div>

          <div className="available_main_img">
            <Link to="https://www.flipkart.com/search?q=VISHWAS%20COOKING%20OIL&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off">
              <img
                className="avail-img avail-img3"
                src={images.Flipkart_logo}
                alt=""
              />
            </Link>
          </div>
          {/* <Link to="https://deodap.in/search?q=Vishwas">DeoDap</Link> */}
          <div className="available_main_img">
            <Link to="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&me=A33TVR7FZVY48E">
              <img className="avail-img" src={images.amazon} alt="" />
            </Link>
          </div>
        </div>
        {/* </AnimationOnScroll> */}
      </section>
    </div>
  );
};

export default AvailableOn;
