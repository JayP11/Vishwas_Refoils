import React, { useState } from "react";
import "./Journey.css";
import { MdLocationCity, MdRocketLaunch } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbBrandEnvato } from "react-icons/tb";
import { GiCottonFlower } from "react-icons/gi";
import images from "../../constants/images";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Journey = () => {
  const [isHovering, setIsHovering] = useState(true);
  const [isHovering1, setIsHovering1] = useState(true);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);
  const [isHovering7, setIsHovering7] = useState(false);
  const [isHovering8, setIsHovering8] = useState(false);
  const [isHovering9, setIsHovering9] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovering1(true);
    setIsHovering2(false);
    setIsHovering3(false);
    setIsHovering4(false);
    setIsHovering5(false);
    setIsHovering6(false);
    // setIsHovering1(true);
    // setIsHovering(false);
  };
  const handleMouseOut1 = () => {
    setIsHovering1(false);
    setIsHovering(true);
  };

  const handleMouseOver2 = () => {
    setIsHovering2(true);
    setIsHovering1(false);
    setIsHovering3(false);
    setIsHovering4(false);
    setIsHovering5(false);
    setIsHovering6(false);
    // setIsHovering(false);
  };
  const handleMouseOut2 = () => {
    setIsHovering2(false);
    setIsHovering(true);
  };

  const handleMouseOver3 = () => {
    setIsHovering3(true);
    setIsHovering1(false);
    setIsHovering2(false);
    setIsHovering4(false);
    setIsHovering5(false);
    setIsHovering6(false);
    // setIsHovering(false);
  };
  const handleMouseOut3 = () => {
    setIsHovering3(false);
    setIsHovering(true);
  };

  const handleMouseOver4 = () => {
    setIsHovering4(true);
    setIsHovering1(false);
    setIsHovering2(false);
    setIsHovering3(false);
    setIsHovering5(false);
    setIsHovering6(false);
    // setIsHovering(false);
  };
  const handleMouseOut4 = () => {
    setIsHovering4(false);
    setIsHovering(true);
  };

  const handleMouseOver5 = () => {
    setIsHovering5(true);
    setIsHovering1(false);
    setIsHovering2(false);
    setIsHovering3(false);
    setIsHovering4(false);
    setIsHovering6(false);
    // setIsHovering(false);
  };
  const handleMouseOut5 = () => {
    setIsHovering5(false);
    setIsHovering(true);
  };

  const handleMouseOver6 = () => {
    setIsHovering6(true);
    setIsHovering1(false);
    setIsHovering2(false);
    setIsHovering3(false);
    setIsHovering4(false);
    setIsHovering5(false);
    // setIsHovering(false);
  };
  const handleMouseOut6 = () => {
    setIsHovering6(false);
    setIsHovering(true);
  };

  const handleMouseOver7 = () => {
    setIsHovering7(true);
    setIsHovering(false);
  };
  const handleMouseOut7 = () => {
    setIsHovering7(false);
    setIsHovering(true);
  };

  const handleMouseOver8 = () => {
    setIsHovering8(true);
    setIsHovering(false);
  };
  const handleMouseOut8 = () => {
    setIsHovering8(false);
    setIsHovering(true);
  };

  const handleMouseOver9 = () => {
    setIsHovering9(true);
    setIsHovering(false);
  };
  const handleMouseOut9 = () => {
    setIsHovering9(false);
    setIsHovering(true);
  };

  return (
    <>
      <div
        className="our-jour-sec"
        style={{
          backgroundImage: `url(${images.bg_image})`,
          backgroundPosition: "initial",
          backdropFilter: "blur(2px)",
          backgroundSize: "cover",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}>
        <div className="our-jour-head-main">
          <p className="red_heading" style={{ marginTop: "0px" }}>
            Journey Of Vishwas
          </p>
        </div>
        <AnimationOnScroll
          animateIn="fadeInRight"
          animateOut="animate__bounceOutRight">
          <div className="our-jour-con">
            {isHovering1 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">THE EARLY 1996</p>
                  </div>

                  <p className="our-jour-des">
                    In 1996, Mr. Daulatram Mandhiyani initiated a business with
                    palmolein oil, specifically dealing with 15 kg tin, under
                    the proprietorship of “Vishwas Tea Company”.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">Year</p>
                    <p className="our-jour-side-since2">1996</p>
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering2 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">Year 2012</p>
                  </div>

                  <p className="our-jour-des">
                    In 2012, Vishwas Tea Company, under the proprietorship of
                    Mr. Daultram Mandhiyani, embarked on a journey of growth by
                    expanding its product range to include a variety of oils
                    such as corn oil, sunflower oil, and cottonseed oil, all
                    available in different packaging options.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">2012</p>
                    {/* <p className="our-jour-side-since2">1940s</p> */}
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering3 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">Year 2015 </p>
                  </div>

                  <p className="our-jour-des">
                    In 2015, Vishwas Refoils- Partnership firm has been
                    incorporated with Mr. Deepak Mandhiyani and Mr. Daultram
                    Mandhiyani, and since then it has been growing in a better
                    way by increasing the range of products, including various
                    types of oils with different varieties of packaging.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">2015</p>
                    {/* <p className="our-jour-side-since2">1940s</p> */}
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering4 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since"> Year 2021</p>
                  </div>

                  <p className="our-jour-des">
                    In 2021, after the death of Mr. Daulatram Mandhiyani, his
                    wife, Mrs. Kantaben Mandhiyani, became a partner in the
                    partnership firm, Vishwas Refoils. In this year Vishwas
                    group has developed product range by introducing Soyabean
                    Oil, Castor Oil and Groundnut Oil, along with varieties of
                    packaging.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">2021</p>
                    {/* <p className="our-jour-side-since2">1940s</p> */}
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering5 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">Year 2022</p>
                  </div>

                  <p className="our-jour-des">
                    In 2022, the group further expands by incorporating “Vishwas
                    Refoils LLP”. Moreover, they introduced various packaging
                    options to cater different consumer preferences.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">2022</p>
                    {/* <p className="our-jour-side-since2">1940s</p> */}
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering6 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">Year 2023</p>
                  </div>

                  <p className="our-jour-des">
                    On 18th March, 2023 the group further enlarged its business
                    by incorporating public limited company. Vishwas Refoils &
                    Consumer Limited has a long-standing tradition of innovation
                    and success that has spanned over generations. The company
                    has been in business for almost 30 years, indicating its
                    establishment and growth over a significant period.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">2023</p>
                    {/* <p className="our-jour-side-since2">Days</p> */}
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}
            <div className="our-jour-con-part3">
              <div className="our-jour-since-list-flex">
                <div
                  className="our-jour-btn-flex our-jour-since-btn1"
                  onClick={() => handleMouseOver1()}>
                  <button className="our-jour-since-btn">Early 1996</button>
                  <div className="our-jour-since-round"></div>
                </div>

                <div
                  className="our-jour-btn-flex our-jour-since-btn2"
                  onClick={() => handleMouseOver2()}>
                  <button className="our-jour-since-btn">Year 2012</button>
                  <div className="our-jour-since-round"></div>
                </div>

                <div
                  className="our-jour-btn-flex our-jour-since-btn3"
                  onClick={() => handleMouseOver3()}>
                  <button className="our-jour-since-btn">Year 2015</button>
                  <div className="our-jour-since-round"></div>
                </div>

                <div
                  className="our-jour-btn-flex our-jour-since-btn4"
                  onClick={() => handleMouseOver4()}>
                  <button className="our-jour-since-btn">Year 2021</button>
                  <div className="our-jour-since-round"></div>
                </div>

                <div
                  className="our-jour-btn-flex our-jour-since-btn5"
                  onClick={() => handleMouseOver5()}>
                  <button className="our-jour-since-btn">Year 2022</button>
                  <div className="our-jour-since-round"></div>
                </div>

                <div
                  className="our-jour-btn-flex our-jour-since-btn6"
                  onClick={() => handleMouseOver6()}>
                  <button className="our-jour-since-btn">Year 2023</button>
                  <div className="our-jour-since-round"></div>
                </div>
              </div>
              <div className="our-jour-since-line"></div>
            </div>
          </div>
        </AnimationOnScroll>
        {/* resp part */}
        <div className="our-jour-main-resp-position">
          <div className="our-jour-con2">
            {isHovering1 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">EARLY 1966</p>
                  </div>

                  <p className="our-jour-des">
                    In 1996, Mr. Daulatram Mandhiyani initiated a business with
                    palmolein oil, specifically dealing with 15 kg tin, under
                    the proprietorship of “Vishwas Tea Company”.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">Early</p>
                    <p className="our-jour-side-since2">1966</p>
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering2 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">Year 2012</p>
                  </div>

                  <p className="our-jour-des">
                    In 2012, Vishwas Tea Company, under the proprietorship of
                    Mr. Daultram Mandhiyani, embarked on a journey of growth by
                    expanding its product range to include a variety of oils
                    such as corn oil, sunflower oil, and cottonseed oil, all
                    available in different packaging options.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">2012</p>
                    {/* <p className="our-jour-side-since2">1937</p> */}

                    {/* <p className="our-jour-side-since2">1940s</p> */}
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering3 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">Year 2015</p>
                  </div>

                  <p className="our-jour-des">
                    In 2015, Vishwas Refoils- Partnership firm has been
                    incorporated with Mr. Deepak Mandhiyani and Mr. Daultram
                    Mandhiyani, and since then it has been growing in a better
                    way by increasing the range of products, including various
                    types of oils with different varieties of packaging.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">2015</p>
                    {/* <p className="our-jour-side-since2">1940s</p> */}
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering4 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">Year 2021</p>
                  </div>

                  <p className="our-jour-des">
                    In 2021, after the death of Mr. Daulatram Mandhiyani, his
                    wife, Mrs. Kantaben Mandhiyani, became a partner in the
                    partnership firm, Vishwas Refoils. In this year Vishwas
                    group has developed product range by introducing Soyabean
                    Oil, Castor Oil and Groundnut Oil, along with varieties of
                    packaging.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">2021</p>
                    {/* <p className="our-jour-side-since2">1940s</p> */}
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering5 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">Year 2022</p>
                  </div>

                  <p className="our-jour-des">
                    In 2022, the group further expands by incorporating “Vishwas
                    Refoils LLP”. Moreover, they introduced various packaging
                    options to cater different consumer preferences.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">2022</p>
                    {/* <p className="our-jour-side-since2">1940s</p> */}
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}

            {isHovering6 === true ? (
              <>
                <div className="our-jour-con-part1">
                  <div className="our-jour-des-head">
                    <div className="line-jouny"></div>
                    <p className="our-jour-since">Year 2023</p>
                  </div>

                  <p className="our-jour-des">
                    On 18th March, 2023 the group further enlarged its business
                    by incorporating public limited company. Vishwas Refoils &
                    Consumer Limited has a long-standing tradition of innovation
                    and success that has spanned over generations. The company
                    has been in business for almost 30 years, indicating its
                    establishment and growth over a significant period.
                  </p>
                </div>
                <div className="our-jour-con-part2">
                  <div className="our-jour-since-posotion">
                    <p className="our-jour-side-since">Current</p>
                    <p className="our-jour-side-since2">Days</p>
                    <img src={images.our_jour_img} className="our-jour-img" />
                  </div>
                </div>
              </>
            ) : null}
          </div>

          <div className="our-jour-con-part33">
            <div className="our-jour-since-list-flex">
              <div className="our-jour-btn-flex our-jour-since-btn1">
                <button
                  className="our-jour-since-btn"
                  onClick={() => handleMouseOver1()}>
                  Year 1996
                </button>
                <div className="our-jour-since-round"></div>
              </div>

              <div className="our-jour-btn-flex our-jour-since-btn2-resp">
                <button
                  className="our-jour-since-btn"
                  onClick={() => handleMouseOver2()}>
                  Year 2012
                </button>
                <div className="our-jour-since-round"></div>
              </div>

              <div className="our-jour-btn-flex our-jour-since-btn3-resp">
                <button
                  className="our-jour-since-btn"
                  onClick={() => handleMouseOver3()}>
                  Year 2015
                </button>
                <div className="our-jour-since-round"></div>
              </div>

              <div className="our-jour-btn-flex our-jour-since-btn4-resp">
                <button
                  className="our-jour-since-btn "
                  onClick={() => handleMouseOver4()}>
                  Year 2021
                </button>
                <div className="our-jour-since-round"></div>
              </div>

              <div className="our-jour-btn-flex our-jour-since-btn5-resp">
                <button
                  className="our-jour-since-btn"
                  onClick={() => handleMouseOver5()}>
                  Year 2022
                </button>
                <div className="our-jour-since-round"></div>
              </div>

              <div className="our-jour-btn-flex our-jour-since-btn6-resp">
                <button
                  className="our-jour-since-btn"
                  onClick={() => handleMouseOver6()}>
                  Year 2023
                </button>
                <div className="our-jour-since-round"></div>
              </div>

              {/* <div className="our-jour-btn-flex">
                {isHovering5 === true ? (
                  <>
                    <div className="our-jour-con-part1">
                      <div className="our-jour-des-head">
                        <div className="line-jouny"></div>
                        <p className="our-jour-since">2003</p>
                      </div>

                      <p className="our-jour-des">
                        The company's initial step was established in 1966 with
                        an oil mill in the sleepy Gujarati village of "Mangrol."
                        The mill supplied groundnut oil in response to local
                        demand.
                      </p>
                    </div>
                    <div className="our-jour-con-part2">
                      <div className="our-jour-since-posotion">
                        <p className="our-jour-side-since">2003</p>
                        <p className="our-jour-side-since2">1940s</p>
                        <img
                          src={images.our_jour_img}
                          className="our-jour-img"
                        />
                      </div>
                    </div>
                  </>
                ) : null}

                <div className="our-jour-since-round"></div>
              </div> */}

              {/* <div className="our-jour-btn-flex">
                <button className="our-jour-since-btn">Early 1920s</button>
                <div className="our-jour-since-round"></div>
              </div> */}
            </div>
            <div className="our-jour-since-line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
