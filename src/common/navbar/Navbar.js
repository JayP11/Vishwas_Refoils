import React, { useState } from "react";
import images from "../../constants/images";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="nav-sec">
        {/* <img src={images.yellow_head} className="nav-head-img" /> */}
        <div className="nav-main-nav">
          <nav className="nav-con">
            <div className="nav-logobox">
              <Link to="/">
                <img src={images.logo} className="nav-logo" />
              </Link>
            </div>

            <div className="nav-linkks">
              <Link to="/" className="nav-linkk">
                Home
              </Link>
              <div className="dropdown">
                <Link className="nav-linkk">
                  About
                  <i className="fa fa-caret-down"></i>
                </Link>
                <div className="dropdown-content">
                  <a href="/AboutUS">About vishwas</a>
                  <a href="/FoundersMessage">Chairman's Message</a>
                </div>
              </div>
              <div className="dropdown">
                <Link className="nav-linkk">
                  Products
                  <i className="fa fa-caret-down"></i>
                </Link>
                <div className="dropdown-content">
                  <Link to="/PalmoleinOil"> Refined Palmolein Oil</Link>
                  <Link to="/SunflowerOil"> Refined Sunflower Oil</Link>
                  <Link to="/GroundnutOil"> Refined Groundnut Oil</Link>
                  <Link to="/CottonseedOil"> Refined Cottonseed Oil</Link>
                  <Link to="/CornOil"> Refined Corn Oil</Link>
                  <Link to="/CastorSinglepro"> Refined Castor Oil</Link>
                  <Link to="/SoyabeanOil"> Refined Soyabean Oil</Link>
                </div>
              </div>

              <Link to="/InvestorDesk" className="nav-linkk">
                Investor Desk
              </Link>
              <Link to="/Recipes" className="nav-linkk">
                Recipes
              </Link>
              <Link to="/Career" className="nav-linkk">
                Career
              </Link>
              <Link to="/ContactUS" className="nav-linkk">
                Contact
              </Link>
              {/* <Link
                to="https://deodap.in/search?q=Vishwas"
                className="red_button shop_now_btn">
                Shop now
              </Link> */}
              {/* <a href="https://deodap.in/search?q=Vishwas"> */}

              <div className="dropdown">
                <Link className="nav-linkk">
                  Shop now
                  <i className="fa fa-caret-down"></i>
                </Link>
                <div className="dropdown-content">
                  <Link to="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&me=A33TVR7FZVY48E">
                    Amazon
                  </Link>
                  <Link to="https://deodap.in/search?q=Vishwas">DeoDap</Link>
                </div>
              </div>
              {/* <button
                type="button"
                className="red_button shop_now_btn shp-now-open">
                Shop now
              </button> */}
              <div className="shp-now-open-inner"></div>
              {/* </a> */}
            </div>

            <div className="nav-btn-icon-part">
              {toggleMenu === false ? (
                <button className="nav-btn" onClick={() => setToggleMenu(true)}>
                  <AiOutlineMenu className="nav-btn-icon" />
                </button>
              ) : (
                <button
                  className="nav-btn"
                  onClick={() => setToggleMenu(false)}>
                  <AiOutlineClose className="nav-btn-icon" />
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
      <>
        {toggleMenu && (
          <div className="mobile-nav-main">
            <ul className="mobile-nav-links">
              <li>
                <Link
                  to={"/"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Home
                </Link>
              </li>
              <div className="dropdown">
                <Link className="mobile-nav-link">
                  About
                  <i className="fa fa-caret-down"></i>
                </Link>
                <div className="dropdown-content">
                  <a href="/AboutUS">About vishwas</a>
                  <a href="/FoundersMessage">Chairman's Message</a>
                </div>
              </div>
              <div className="dropdown">
                <Link className="mobile-nav-link">
                  Products
                  <i className="fa fa-caret-down"></i>
                </Link>
                <div className="dropdown-content">
                  <a href="/PalmoleinOil" className="">
                    Refined Palmolein Oil
                  </a>
                  <a href="/SunflowerOil" className="">
                    Refined Sunflower Oil
                  </a>
                  <a href="/GroundnutOil" className="">
                    Double Filtered Groundnut Oil
                  </a>
                  <a href="/CottonseedOil" className="">
                    Refined Cottonseed Oil
                  </a>
                  <a href="/CornOil" className="">
                    Refined Corn Oil
                  </a>
                  <a href="/CastorSinglepro" className="">
                    Refined Castor Oil
                  </a>
                  <a href="/SoyabeanOil" className="">
                    Refined Soyabean Oil
                  </a>
                  {/* <a href="/GoldPalmoleinOil" className="">
                    Gold Palmolein Oil
                  </a> */}
                </div>
              </div>
              <li>
                <Link
                  to={"/InvestorDesk"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Investor Desk
                </Link>
              </li>
              <li>
                <Link
                  to={"/recipes"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  to={"/Career"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to={"/ContactUS"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  <a href="https://deodap.in/search?q=Vishwas">
                    <button className="Shop_Now_Button_Prods">Shop Now</button>
                  </a>
                </Link>
              </li> */}
              <div className="dropdown">
                <Link className="mobile-nav-link">
                  Shop now
                  <i className="fa fa-caret-down"></i>
                </Link>
                <div className="dropdown-content">
                  <Link to="https://deodap.in/search?q=Vishwas">DeoDap</Link>
                  <Link to="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&me=A33TVR7FZVY48E">
                    Amazon
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
