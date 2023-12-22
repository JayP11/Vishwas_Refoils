import React from "react";
import images from "../../constants/images";
import "./Footer.css";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="footer-mainn"
      style={{
        // backgroundImage: `url(${img})`,
        backgroundImage: `url(${images.footer_black_bg})`,
        backgroundPosition: "center",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "revert-layer",
        backgroundSize: "initial",
        // position: "relative",
      }}>
      <div className="footer-mainn">
        {/* <img src={images.footer_black_bg} alt="" className="footer_bg_img" /> */}
        <div className="footer_main">
          <div>
            <img src={images.footer_img} alt="" className="footer_img" />
          </div>
          <div className="about_us_main">
            <div>
              <h2>About us</h2>
            </div>
            <div>
              <p>
                We are providing a complete range of highly qualitative products
                to our customers. We are providing products with the help of
                modern technology with skilled employees.
              </p>
            </div>
            <div>
              <p>
                <span
                  style={{ fontWeight: "800" }}
                  className="footer-about-name">
                 VISHWAS REFOILS CONSUMER LIMITED, 
                
                </span>
                 the No.1 edible oil brand, is committed to using the purest ingredients for your well-being with every bite since its inception from 1996.
              </p>
            </div>
            <div className="footer-part-social-icons">
              <a
                href="https://www.facebook.com/VishwasRefoils"
                target="_blank"
                rel="noreferrer">
                <img
                  src={images.fb_logo}
                  alt=""
                  className="footer-social-icon  footercolor_icon"
                />
                {/* <BsFacebook className="footer-social-icon" /> */}
              </a>
              <a
                href="https://instagram.com/vishwas_cooking_oil?igshid=YTQwZjQ0NmI0OA=="
                target="_blank"
                rel="noreferrer">
                {/* <AiFillInstagram className="footer-social-icon" /> */}
                <img
                  src={images.insta_logo}
                  alt=""
                  className="footer-social-icon"
                />
              </a>

              <a
                href="https://twitter.com/VishwasRefoil"
                target="_blank"
                rel="noreferrer">
                {/* <BsTwitter className="footer-social-icon" /> */}
                <img
                  src={images.twitter_logo}
                  alt=""
                  className="footer-social-icon"
                />
              </a>

              <a
                href="https://linkedin.com/in/vishwas-refoils-and-consumer-limited-392300284"
                target="_blank"
                rel="noreferrer">
                {/* <AiFillInstagram className="footer-social-icon" /> */}
                <img
                  src={images.linkedin_logo}
                  alt=""
                  className="footer-social-icon footercolor_icon"
                />
              </a>

              <a
                href="https://www.youtube.com/channel/UCQ9tm1UCvV7PO2wz0SAlpFg"
                target="_blank"
                rel="noreferrer">
                {/* <AiFillInstagram className="footer-social-icon" /> */}
                <img
                  src={images.youtube_logo}
                  alt=""
                  className="footer-social-icon"
                  style={{ width: "40px" }}
                />
              </a>
            </div>
          </div>
          <div className="quick_links_main">
            <div>
              <h2>Quick links</h2>
            </div>
            <div className="footer_quicklinks">
              <Link to="/" className="links">
                Home
              </Link>
              <Link to="/AboutUS" className="links">
                About
              </Link>
              {/* <Link to="/" className="links">
                Products
              </Link> */}
              <Link to="/InvestorDesk" className="links">
                Investor Desk
              </Link>
              <Link to="/Recipes" className="links">
                Recipes
              </Link>
              <Link to="/Career" className="links">
                Career
              </Link>
              <Link to="/ContactUS" className="links">
                Contact
              </Link>
            </div>
          </div>
          <div className="products_main">
            <div>
              <h2>Products</h2>
            </div>
            <div className="footerlinksmain">
              <a href="/PalmoleinOil" className="footerlinksmaininer">
                Refined Palmolein Oil
              </a>
              <a href="/SunflowerOil" className="footerlinksmaininer">
                Refined Sunflower Oil
              </a>
              <a href="/GroundnutOil" className="footerlinksmaininer">
                Double Filtered Groundnut Oil
              </a>
              <a href="/CottonseedOil" className="footerlinksmaininer">
                Refined Cottonseed Oil
              </a>
              <a href="/CornOil" className="footerlinksmaininer">
                Refined Corn Oil
              </a>
              <a href="/CastorSinglepro" className="footerlinksmaininer">
                Refined Castor Oil
              </a>
              <a href="/SoyabeanOil" className="footerlinksmaininer">
                Refined Soyabean Oil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
