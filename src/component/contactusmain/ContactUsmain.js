import React from "react";
import images from "../../constants/images";
import "./ContactUsmain.css";
import Slider from "react-slick";
import { HiOutlineMail } from "react-icons/hi";
import { BsShop, BsTelephone } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ContactUsmain = () => {
  var settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${images.bg_image})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "initial",

        width: "100vw",
        // height: "34rem",
        display: "flex",
        alignItems: "center",
        paddingBottom: "3rem",
      }}>
      <div className="ContactUsCards_mainblock">
        {/* <AnimationOnScroll
          animateIn="fadeInRight"
          animateOut="animate__bounceOutRight"
        > */}
        <div className="ContactUsCards_descblock ContactUsCards_mapblock1">
          <Slider {...settings}>
            <div>
              <h1
                className="red_heading"
                style={{ marginBottom: "0px", marginTop: "0px" }}>
                Shubham Enterprise-Rajkot :
              </h1>
              <p>
                Near Star Synergy Hospital,
                <br /> Mavdi Main Road, Rajkot- 360007, <br />
                Gujarat (India)
              </p>

              <p>
                {/* Jatinbhai: &nbsp; */}
                <a href="tel:9375599931" style={{ color: "#111" }}>
                  +91 9375599931
                </a>
              </p>
            </div>
            <div>
              <h1
                className="red_heading"
                style={{ marginBottom: "0px", marginTop: "0px" }}>
                Shubham Enterprise-Rajkot :
              </h1>
              <p>
                Devpara Shak Market, <br /> Kothariya Main Road,
                <br /> Devpara, Rajkot- 360001
                <br /> Gujarat (India)
              </p>
              <p>
                {/* Jatinbhai: &nbsp; */}
                <a href="tel:9998069771" style={{ color: "#111" }}>
                  +91 9998069771
                </a>
              </p>
            </div>

            <div>
              <h1
                className="red_heading"
                style={{ marginBottom: "0px", marginTop: "0px" }}>
                Maruti Trading co.-Rajkot:
              </h1>
              <p>
                Opp. Junagadh Utara, Danapith, <br /> Rajkot-360001, Gujarat
                (India){" "}
              </p>
              <p>
                {/* Jatinbhai: &nbsp; */}
                <a href="tel:7434003500" style={{ color: "#111" }}>
                  +91 7434003500
                </a>
              </p>
            </div>
            <div>
              <h1
                className="red_heading"
                style={{ marginBottom: "0px", marginTop: "0px" }}>
                Jaliyan Enterprise,
              </h1>
              <p>
                Near Patel Pan, S K Chowk,
                <br /> Gandhigram,Rajkot - 360007
              </p>
              <p>
                {/* Jatinbhai: &nbsp; */}
                <a href="tel:9327202554" style={{ color: "#111" }}>
                  +91 9327202554
                </a>
              </p>
            </div>

            <div>
              <h1
                className="red_heading"
                style={{ marginBottom: "0px", marginTop: "0px" }}>
                Shree Gajanan Enterprise-Ahmedabad :
              </h1>
              <p>
                406/6, Chokha Bazar, Kalupur, <br /> Ahmedabad-380001 Gujarat
                (India)
              </p>
              <p>
                {/* Jatinbhai: &nbsp; */}
                <a href="tel:9638377021" style={{ color: "#111" }}>
                  +91 9638377021
                </a>
              </p>
            </div>
            <div>
              <h1
                className="red_heading"
                style={{ marginBottom: "0px", marginTop: "0px" }}>
                Ravi Trading - Jamnagar
              </h1>
              <p>
                Grain Market, Jamnagar - 361001 <br />
                Gujarat (India)
              </p>
              <p>
                {/* Bharatbhai: &nbsp; */}
                <a href="tel: 9375373000" style={{ color: "#111" }}>
                  +91 9375373000
                </a>
              </p>
            </div>
            <div>
              <h1
                className="red_heading"
                style={{ marginBottom: "0px", marginTop: "0px" }}>
                Jalaram Trading-Bhavnagar
              </h1>
              <p>
                Randhanpuri Bazar,
                <br /> Behind Danapith, <br /> Bhavnagar-364001, Gujarat (India)
              </p>
              <p>
                {/* Jatinbhai: &nbsp; */}
                <a href="tel:+ 9427560656" style={{ color: "#111" }}>
                  +91 9427560656
                </a>
              </p>
            </div>
            <div>
              <h1
                className="red_heading"
                style={{ marginBottom: "0px", marginTop: "0px" }}>
                Krishna Traders-Amreli
              </h1>
              <p>
                Rajkot Bhavnagar Highway,
                <br /> Opp. Civil Hospital, <br />
                Babra, Dist: Amreli - 365421 <br />
                Gujarat, India
              </p>

              <p>
                {/* Jatinbhai: &nbsp; */}
                <a href="tel:97268 89007" style={{ color: "#111" }}>
                  +91 97268 89007
                </a>
              </p>
            </div>
          </Slider>
          {/* <div className="contact_det">
            <div style={{}}>
              <BsTelephone style={{ height: "40px", width: "40px" }} />
            </div>
            <div>
              <a href="tel:8000007099" style={{ color: "#111" }}>
                +91 80-0000-7099
              </a>
            </div>
          </div> */}
          {/* <div className="contact_det">
            <div style={{}}>
              <HiOutlineMail className="react_icon_contact" />
            </div>
             <div>
              <a href="mailto:vshwstc@gmail.com" style={{ color: "#111" }}>
                vshwstc@gmail.com
              </a>
            </div>{" "} 
          </div> */}
        </div>
        {/* </AnimationOnScroll> */}

        {/* <AnimationOnScroll
          animateIn="fadeInRight"
          animateOut="animate__bounceOutRight"
        > */}
        <div className="ContactUsCards_mapblock ContactUsCards_mapblock2">
          <iframe
            className="map_inner"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.616608670704!2d70.84757307607845!3d22.33033494180454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b667a269d97d%3A0xb82318e1ae7baa!2sVISHWAS%20REFOILS%20%26%20CONSUMER%20LIMITED!5e0!3m2!1sen!2sin!4v1699423790541!5m2!1sen!2sin"
            width="400px"
            height="324"
            frameborder=""
            // style="border:0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"></iframe>
        </div>
        {/* </AnimationOnScroll> */}
      </div>
    </div>
  );
};

export default ContactUsmain;
