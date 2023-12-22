import React from "react";
import "./HeroCareer.css";
import images from "../../constants/images";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const HeroCareer = () => {
  return (
    <section className="HeroCareer_main">
      <div className="HeroCareer_main_inner">
        <div className="HeroCareer_main_desc">
          <div className="HeroCareer_main_heading">
            <h4>WE HAVE A RANGE OF AMAZING OPPORTUNITIES AVAILABLE</h4>
          </div>
          <div>
            <h1 className="Join_Our_Team_head">Join Our Team</h1>
          </div>
          <div className="career_contact">
            <div className="mail_block_career">
              <div className="react_icon_carrer_circle">
                <HiOutlineMail className="react_icon_contact react_icon_contact_position" />
              </div>
              {/* <div className=""> */}
              <a
                href="mailto:vrclimited.2023@gmail.com"
                className="contact_links"
                >
                vrclimited.2023@gmail.com
              </a>
              {/* </div> */}
            </div>
            <div className="no_block_career">
              <div className="react_icon_carrer_circle">
                <BsTelephone className="react_icon_contact react_icon_contact_position" />
              </div>
              <a href="tel:77780 98001 " className="contact_links">
              +91 77780 98001 
              </a>
              {/* <p>80 00 00 70 99</p> */}
            </div>
          </div>
        </div>
        <div className="" style={{ height: "150px", width: "150px" }}>
          <img
            src={images.carrer_cartoon_img}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        {/* <div className="HeroCareer_main_social">
          <div className="HeroCareer_main_social_inner">
            <div className="social_img_main">
              <img src={images.linkdin} alt="" className="social_img1" />
            </div>
            <div className="social_img_main">
              <img src={images.twitter} alt="" className="social_img2" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroCareer;

// ;
