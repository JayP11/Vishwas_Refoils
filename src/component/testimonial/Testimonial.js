import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import images from "../../constants/images";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Testimonial.css";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${images.bg_image})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "cover",

        // width: "100vw",
        // height: "34rem",
        // display: "flex",
        // alignItems: "center",
        // paddingTop: "3rem",
        paddingBottom: "3rem",
      }}>
      {/* <div className="testimonial_slider_main"> */}
      <div className="test_main">
        <div className="feature-head-part">
          <p className="availableon_red_heading ">Testimonialas</p>
        </div>
        <Slider {...settings} className="slick">
          <div className="test_card1">
            <div className="img_ficon">
              <div className="per_img_main">
                <img src={images.person1} className="per_img" />
              </div>
              <div style={{ width: "4rem" }}>
                <FaQuoteRight style={{ width: "3rem", height: "3rem" }} />
              </div>
            </div>
            <div className="per_name">
              <h4 style={{ margin: "0" }}>Sophia Smith</h4>
            </div>
            <div>
              <p>
                Having the power to capture user feedback is revolutionary. Even
                if a participant abandons the sign-up process midway, their
                valuable input remains intact.
              </p>
            </div>
          </div>
          <div className="test_card1">
            <div className="img_ficon">
              <div className="per_img_main">
                <img src={images.person2} className="per_img" />
              </div>
              <div style={{ width: "4rem" }}>
                <FaQuoteRight style={{ width: "3rem", height: "3rem" }} />
              </div>
            </div>
            <div className="per_name">
              <h4 style={{ margin: "0" }}>Alex Morgan</h4>
            </div>
            <div>
              <p>
                The functionality to capture responses is a true game-changer.
                Even if a user becomes fatigued during sign-up and abandons the
                process, their information remains stored. Jessie J
              </p>
            </div>
          </div>
          <div className="test_card1">
            <div className="img_ficon">
              <div className="per_img_main">
                <img src={images.person3} className="per_img" />
              </div>
              <div style={{ width: "4rem" }}>
                <FaQuoteRight style={{ width: "3rem", height: "3rem" }} />
              </div>
            </div>
            <div className="per_name">
              <h4 style={{ margin: "0" }}>Trinity Rodman</h4>
            </div>
            <div>
              <p>
                The ability to capture responses is a game-changer. If a user
                gets tired of the sign up and leaves, that data is still
                persisted. Additionally, it's great to select between formats.
                Jessie J
              </p>
            </div>
          </div>
          <div className="test_card1">
            <div className="img_ficon">
              <div className="per_img_main">
                {/* <img src="https://i.ibb.co/BtD6Qgx/Clients-Says1.png" /> */}
                <img src={images.person2} className="per_img" />
              </div>
              <div style={{ width: "4rem" }}>
                <FaQuoteRight style={{ width: "3rem", height: "3rem" }} />
              </div>
            </div>
            <div className="per_name">
              <h4 style={{ margin: "0" }}>James Smith</h4>
            </div>
            <div>
              <p>
                Mind-blowing discovery! changed my routine. Essential for
                everyone. A vise advice to all interested. Can't imagine without
                it!"
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
