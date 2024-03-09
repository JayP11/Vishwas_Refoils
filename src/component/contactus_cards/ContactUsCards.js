import React, { useState } from "react";
import "./ContactUsCards.css";
import images from "../../constants/images";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Slider from "react-slick";

const ContactUsCards = () => {
  var settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [AllImages, setAllImages] = useState();

  return (
    <div
      className="bg_image_main"
      style={{
        backgroundImage: `url(${images.bg_image})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "initial",

        display: "flex",
        alignItems: "center",
        // paddingTop: "3rem",
        // paddingBottom: "3rem",
      }}>
      <div className="ContactUsCards_main">
        <div className="Cards_main">
          <div className="Card_headoffice">
            <div className="Card_headoffice_details Card_headoffice_details2">
              <div>
                <h1
                  className="red_heading"
                  style={{ color: "white", marginBottom: "0px" }}>
                  Registered Office Address
                </h1>
              </div>
              <div className="contact_address">
                <p>
                  Plot No. 12/13,
                  <br /> Survey No. 112/1,
                  <br /> Near Ruda Transport Nagar,
                  <br />
                  Anandpar-Navagam,
                  <br /> Rajkot-360 003-Gujarat
                </p>
              </div>
              <div className="contact_no">
                <div style={{ display: "flex", marginRight: "10px" }}>
                  <BsTelephone className="react_icon_contact" />
                </div>
                <div>
                  <a href="tel:8000007099" style={{ color: "#111" }}>
                    +91 80-0000-7099
                  </a>
                  {/* <p>80 00 00 70 99</p> */}
                </div>
              </div>
              <div className="contact_no">
                <div style={{ display: "flex" }}>
                  <HiOutlineMail className="react_icon_contact" />
                </div>
                <div>
                  <a href="mailto:vshwstc@gmail.com" style={{ color: "#111" }}>
                    vshwstc@gmail.com
                  </a>
                  {/* <p>vshwstc@gmail.com</p> */}
                </div>
              </div>
            </div>
            <div className="Card_headoffice_details Card_headoffice_details1">
              <div>
                <h1
                  className="red_heading"
                  style={{ color: "white", marginBottom: "0px" }}>
                  Head Office
                </h1>
              </div>
              <div className="contact_address">
                <p>
                  907,
                  <br /> Nakshatra Heights,
                  <br /> Opp. Raiya telephone exchange,
                  <br /> 150 feet ring road,
                  <br /> Rajkot-360 007-Gujarat
                </p>
              </div>
              <div className="contact_no">
                <div style={{ display: "flex", marginRight: "10px" }}>
                  <BsTelephone className="react_icon_contact" />
                </div>
                <div>
                  <a href="tel:91577 53915" style={{ color: "#111" }}>
                    +91 91577 53915
                  </a>
                  {/* <p>80 00 00 70 99</p> */}
                </div>
              </div>
              <div className="contact_no">
                <div style={{ display: "flex" }}>
                  <HiOutlineMail className="react_icon_contact" />
                </div>
                <div>
                  <a
                    href="mailto:vrclimited.2023@gmail.com"
                    style={{ color: "#111" }}>
                    vrclimited.2023@gmail.com
                  </a>
                  {/* <p>vshwstc@gmail.com</p> */}
                </div>
              </div>
            </div>

            {/*  */}

            {/* <div className="map">            
              <iframe
                className="map map1"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14766.473860381131!2d70.7705646!3d22.2924381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2ea168db81%3A0x4e1327ea40acd7d7!2sNakshatra%20Height!5e0!3m2!1sen!2sin!4v1694874702011!5m2!1sen!2sin"
                width="100%"
                height="324"
                frameborder=""
                // style="border:0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"></iframe>
            </div> */}
          </div>
          <div className="contus-location-list-main">
            <p className="red_heading">We are available at</p>
            <div className="contus-location-list-flex">
              <button
                type="button"
                className="red_button shop_now_btn"
                onClick={() => {
                  setAllImages(1);
                }}>
                Rajkot
              </button>

              <button
                type="button"
                className="red_button shop_now_btn"
                onClick={() => {
                  setAllImages(2);
                }}>
                Ahemdabad
              </button>

              <button
                type="button"
                className="red_button shop_now_btn"
                onClick={() => {
                  setAllImages(3);
                }}>
                Jamnagar
              </button>

              <button
                type="button"
                className="red_button shop_now_btn"
                onClick={() => {
                  setAllImages(4);
                }}>
                Bhavnagar
              </button>

              <button
                type="button"
                className="red_button shop_now_btn"
                onClick={() => {
                  setAllImages(5);
                }}>
                Amreli
              </button>
            </div>

            {AllImages === 1 ? (
              <>
                <div className="cont-add-part-main-flex">
                  <div style={{ marginTop: "60px" }}>
                    <h1
                      className="red_heading"
                      style={{ marginBottom: "0px", marginTop: "0px" }}>
                      Shubham Enterprise-Rajkot
                    </h1>
                    <div className="sub-add-flex">
                      <div
                        className="cont-add-part"
                        style={{ marginTop: "20px" }}>
                        <p
                          className="cont-add-txt"
                          style={{ marginTop: "0px" }}>
                          Near Star Synergy Hospital,
                          <br /> Mavdi Main Road, <br /> Rajkot- 360007, <br />{" "}
                          Gujarat (India)
                        </p>

                        <div
                          className="contact_det"
                          style={{ marginTop: "0px" }}>
                          <div style={{}}>
                            <BsTelephone
                              style={{ height: "20px", width: "20px" }}
                            />
                          </div>
                          <div>
                            <a href="tel:9375599931" style={{ color: "#111" }}>
                              +91 9375599931
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="line-gray-add"></div>

                      <div
                        className="cont-add-part"
                        style={{ marginTop: "20px" }}>
                        <p
                          className="cont-add-txt"
                          style={{ marginTop: "-5px" }}>
                          Devpara Shak Market,
                          <br /> Kothariya Main Road,
                          <br /> Devpara, Rajkot- 360001, <br /> Gujarat (India)
                        </p>

                        <div
                          className="contact_det"
                          style={{ marginTop: "10px" }}>
                          <div style={{}}>
                            <BsTelephone
                              style={{ height: "20px", width: "20px" }}
                            />
                          </div>
                          <div>
                            <a href="tel:+9998069771" style={{ color: "#111" }}>
                              +91 9998069771
                            </a>
                            {/* <p>80 00 00 70 99</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cont-add-part" style={{ marginTop: "35px" }}>
                    <h1
                      className="red_heading"
                      style={{
                        marginBottom: "0px",
                        marginTop: "0px",
                        fontSize: "30px",
                      }}>
                      Maruti Trading co.-Rajkot
                    </h1>
                    <p className="cont-add-txt" style={{ marginTop: "10px" }}>
                      Opp. Junagadh Utara,
                      <br /> Danapith, Rajkot-360001, Gujarat (India)
                    </p>
                    <div className="contact_det">
                      <div style={{}}>
                        <BsTelephone
                          style={{ height: "20px", width: "20px" }}
                        />
                      </div>
                      <div>
                        <a href="tel:7434003500" style={{ color: "#111" }}>
                          +91 7434003500
                        </a>
                        {/* <p>80 00 00 70 99</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="cont-add-part" style={{ marginTop: "35px" }}>
                    <h1
                      className="red_heading"
                      style={{
                        marginBottom: "0px",
                        marginTop: "0px",
                        fontSize: "30px",
                      }}>
                      Jaliyan Enterprise
                    </h1>
                    <p className="cont-add-txt" style={{ marginTop: "10px" }}>
                      Jaliyan Enterprise,
                      <br /> Near Patel Pan, S K Chowk, Gandhigram,Rajkot -
                      360007
                    </p>
                    <div className="contact_det">
                      <div style={{}}>
                        <BsTelephone
                          style={{ height: "20px", width: "20px" }}
                        />
                      </div>
                      <div>
                        <a href="tel:9327202554" style={{ color: "#111" }}>
                          +91 9327202554
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {AllImages === 2 ? (
              <>
                <div className="cont-add-part-main-flex cont-add-part-main-flex2">
                  <div>
                    <h1
                      className="red_heading"
                      style={{ marginBottom: "0px", marginTop: "0px" }}>
                      Shree Gajanan Enterprise-Ahmedabad:
                    </h1>
                    <p>
                      406/6, Chokha Bazar,
                      <br /> Kalupur, Ahmedabad-380001 <br />
                      Gujarat (India)
                    </p>

                    <div className="contact_det">
                      <div style={{}}>
                        <BsTelephone
                          style={{ height: "20px", width: "20px" }}
                        />
                      </div>
                      <div>
                        <a href="tel:+9638377021" style={{ color: "#111" }}>
                          +91 9638377021
                        </a>
                        {/* <p>80 00 00 70 99</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {AllImages === 3 ? (
              <>
                <div className="cont-add-part-main-flex cont-add-part-main-flex2">
                  <div>
                    <h1
                      className="red_heading"
                      style={{ marginBottom: "0px", marginTop: "0px" }}>
                      Ravi Trading- Jamnagar :
                    </h1>
                    <p>
                      Grain Market,
                      <br /> Jamnagar 361001 Gujarat (India)
                    </p>

                    <div className="contact_det">
                      <div style={{}}>
                        <BsTelephone
                          style={{ height: "20px", width: "20px" }}
                        />
                      </div>
                      <div>
                        <a href="tel:9375373000" style={{ color: "#111" }}>
                          +91 9375373000
                        </a>
                        {/* <p>80 00 00 70 99</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {AllImages === 4 ? (
              <>
                <div className="cont-add-part-main-flex cont-add-part-main-flex2">
                  <div>
                    <h1
                      className="red_heading"
                      style={{ marginBottom: "0px", marginTop: "0px" }}>
                      Jalaram Trading-Bhavnagar :
                    </h1>
                    <p>
                      Randhanpuri Bazar,
                      <br /> Behind Danapith,
                      <br /> Bhavnagar-364001, Gujarat (India)
                    </p>

                    <div className="contact_det">
                      <div style={{}}>
                        <BsTelephone
                          style={{ height: "20px", width: "20px" }}
                        />
                      </div>
                      <div>
                        <a href="tel: 9427560656" style={{ color: "#111" }}>
                          +91 9427560656
                        </a>
                        {/* <p>80 00 00 70 99</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {AllImages === 5 ? (
              <>
                <div className="cont-add-part-main-flex cont-add-part-main-flex2">
                  <div>
                    <h1
                      className="red_heading"
                      style={{ marginBottom: "0px", marginTop: "0px" }}>
                      Krishna Traders-Amreli :
                    </h1>
                    <p>
                      Rajkot Bhavnagar Highway,
                      <br /> Opp. Civil Hospital,
                      <br /> Babra, Dist: Amreli 365421, <br />
                      Gujarat (India)
                    </p>

                    <div className="contact_det">
                      <div style={{}}>
                        <BsTelephone
                          style={{ height: "20px", width: "20px" }}
                        />
                      </div>
                      <div>
                        <a href="tel:97268 89007" style={{ color: "#111" }}>
                          +91 97268 89007
                        </a>
                        {/* <p>80 00 00 70 99</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCards;
