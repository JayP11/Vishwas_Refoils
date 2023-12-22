import React from "react";
import "./HeroAbout.css";
import images from "../../constants/images";
import { AnimationOnScroll } from "react-animation-on-scroll";
const HeroAbout = () => {
  return (
    <div
      className=""
      style={{
        // backgroundImage: `url(${images.section_bg1})`,

        backgroundImage: `url(${images.bg_image})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "initial",
        width: "100vw",
        // height: "34rem",
        // display: "flex",
        // alignItems: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}>
      <div className="AboutUS_main">
        <div className="AboutUS_desc_main">
          <div className="desc_main1">
            {/* <AnimationOnScroll
              animateIn="fadeInRight"
              animateOut="animate__bounceOutRight"
            > */}
            <div className="AboutUS_desc_head">
              <p className="red_heading">WHO WE ARE</p>
            </div>
            {/* </AnimationOnScroll> */}

            {/* <AnimationOnScroll
              animateIn="fadeInRight"
              animateOut="animate__bounceOutRight"
            > */}
            <div className="">
              <p style={{ textAlign: "justify" }}>
                Vishwas Group is an ISO 22000:2005 and 9001:2008 certified
                group, established in 1994. The group is recognized as a leading
                supplier of various edible oils. The group offers a qualitative
                range of edible oils, including Refined Sunflower Oil, Refined
                Cottonseed Oil, Refined Corn Oil, Refined Soybean Oil, Active
                Frying Oil, and Refined Palmolein Oil. The group emphasizes the
                belief that creating something of lasting value requires
                persistent efforts over time. Vishwas Group continuously works
                to upgrade its packaging facilities and conducts ongoing
                research in the field of oils to improve the existing quality
                standards. As a result of their efforts, the group has earned a
                good reputation among their clients and for their branded
                products.
              </p>
            </div>
            {/* </AnimationOnScroll> */}
          </div>
          <div className="AboutUS_img">
            <img src={images.team} alt="" className="AboutUsImg1" />
          </div>
        </div>
        {/* <div className="AboutUS_Second_Part">
        <div>
          <img
            src={images.about_certificate_1}
            alt=""
            className="AboutUsImg2"
          />
        </div>
        <div className="desc_main2">
          <p>
            Vishwas Refoils LLP, An ISO 22000:2018 & 9001:2015 certified
            company, established in 1994 are recognized as one of the leading
            manufacturers & suppliers of a wide array of Edible Oils. Our
            qualitative range of edible oils includes Refined Sunflower Oil,
            Refined Cottonseed Oil, Refined Corn Oil, Refined Soybean oil,
            Active Frying Oil and Refined Palmolein Oil. Apart from suppling in
            domestic markets. It is our earnest belief that nothing of permanent
            and perennial value is created overnight. With our persistent
            efforts to upgrade our manufacturing and packing facilities, and
            continuous research in the field of oils, for betterment of existing
            quality standards we have earned a good repute amongst our clients
            and for our Branded products
          </p>
        </div>
      </div>
      <div className="AboutUS_Third_Part">
        <div className="desc_main3">
          <p>
            Vishwas Refoils LLP is fully geared to meet the challenges of the
            international market by providing technologically harnessed natural
            products with enhanced product quality, economical prices and better
            services. Everyone dreams of ‘Perfection’ but ‘Quest for Excellence’
            is the way of life, for our company. Under the leadership of our
            founder Mr. Daulatram Sadarangmal Mandhiyani and MD Mr. Deepak
            Daulatram Mandhiyani, we are accomplishing our objectives and
            visions swiftly. We are a professional group with a technical
            outlook. Also we have a team of well experienced and skilled
            professionals. These professionals have expertise in the processing
            of Edible Oils.
          </p>
        </div>
        <div>
          <img
            src={images.about_certificate_2}
            alt=""
            className="AboutUsImg3"
          />
        </div>
      </div> */}
        <div className="aboutus_para_main">
          <div className="">
            <p style={{ textAlign: "justify" }}>
              Vishwas Group is focused to meet the challenges of the
              international market by offering technologically advanced natural
              products. The group aims to deliver products with enhanced
              quality, competitive prices, and improved services. While
              perfection is a dream for many, the group adopts a "Quest for
              Excellence" as a way of life. The leadership of the group consists
              of Mr. Daulatram Sadarangmal Mandhiyani as the founder and
              continued by Mr. Deepak Daulatram Mandhiyani. Under their
              guidance, the company strives to achieve its objectives and vision
              efficiently. Vishwas Group prides itself on being a professional
              group with a technical outlook, emphasizing the importance of
              expertise and knowledge in their operations. The group having a
              team of well-experienced and skilled professionals who specialize
              in the processing of edible oils.
            </p>
          </div>
          <div className="">
            <p style={{ textAlign: "justify" }}>
              In 1992, Shri Daulatram Sadarangmal Mandhiyani started a small
              startup called "Vishwas Tea Co." Initially, the business focused
              on tea. The refined oil business gained significant success. By
              1994, the group solely focused on the oil business and operated
              under the name "Vishwas Tea Co." The group continued to grow and
              expand its different refined edible oils. It received positive
              responses from clients and became a leading group in the market,
              establishing a strong brand value. In 2015, the group changed its
              name to "Vishwas Refoils" while still operating in the oil
              business. Over the following years, the group experienced
              substantial growth and achieved significant milestones and
              generated substantial revenue. It has gained a strong reputation
              in the market. On 27th July, 2022, the group further modified its
              name to "VISHWAS REFOILS LLP" The addition of
              "LLP" indicates a change in the group's legal structure to a
              Limited Liability Partnership. On 18th March, 2023 the group
              further enlarged its business by incorporating public limited
              company.The information suggests that the company is expected to
              continue its trajectory of success, aiming for further excellence
              and accomplishments in the future.
            </p>
            <p style={{ textAlign: "justify" }}>
              Vishwas Refoils & Consumer Limited is a family-owned business and
              operates as a vertically integrated edible oil supplier. The
              company's headquarters are located in Rajkot City, Gujarat, which
              is situated in Western India. Vishwas Refoils is driven by a
              progressive mindset and understands the significance of
              innovation. The company demonstrates agility by quickly adjusting
              its operations and practices to meet the constantly evolving
              demands of the market.
            </p>
            <p style={{ textAlign: "justify" }}>
              Vishwas Refoils & Consumer Limited has a long-standing tradition
              of innovation and success that has spanned over generations. The
              company has been in business for almost 30 years, indicating its
              establishment and growth over a significant period. Vishwas
              Refoils & Consumer Limited has expanded its product range to
              include various refined oils, such as Refined Sunflower Oil, Corn
              Oil, Cotton Seed Oil, Soybean Oil, Palmolein Oil, Double Filtered
              Groundnut Oil, Castor Oil, and Active Frying Oil and even in all
              the types of packaging varities ranging from 500 ml pouches, 500
              ml bottles, 1 litre pouch, 1 litre bottle, 2 litre jar, 5 litre
              jar, 15 litre tin and 15 kg tin.
            </p>
          </div>
        </div>
        <div className="certificate_img_main">
          {/* <AnimationOnScroll
            animateIn="fadeInLeft"
            animateOut="animate__bounceOutRight"
          > */}
          <div className="certificate_img1_main">
            <img
              src={images.certificate1}
              alt=""
              className="certificate_img"
            />
          </div>
          {/* </AnimationOnScroll> */}
          {/* <AnimationOnScroll
            animateIn="fadeInRight"
            animateOut="animate__bounceOutRight"
          > */}
          <div className="certificate_img2_main">
            <img
              src={images.certificate2}
              alt=""
              className="certificate_img"
            />
          </div>
          <div className="certificate_img3_main">
            <img
              src={images.about_certificate_3}
              alt=""
              className="certificate_img"
            />
          </div>
          {/* </AnimationOnScroll> */}
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
