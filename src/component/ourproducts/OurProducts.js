// import React, { useState } from "react";
// import "./OurProducts.css";
// import images from "../../constants/images";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const OurProducts = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     // dots: true,
//     // infinite: true,
//     // speed: 500,
//     // slidesToShow: 4,
//     // slidesToScroll: 1,
//     // autoplay: true,
//     // autoplaySpeed: 1500,

//     // slidesToShow: 2,
//     // dots: false,
//     // infinite: true,
//     // speed: 1000,
//     // autoplay: true,
//     // centermode:true,
//     // autoplaySpeed: 2000,
//     // cssEase: "linear",
//     // arrows: false,

//     centerMode: true,
//     speed: 1000,
//     autoplay: true,
//     centerPadding: "500px",
//     autoplaySpeed: 2000,
//     slidesToShow: 3,
//     focusOnSelect: true,
//     dots: false,
//     infinite: true,
//     afterChange: (slideIndex) => {
//       setCurrentSlide(slideIndex);
//     },
//     responsive: [
//       {
//         breakpoint: 1500,
//         settings: {
//           centerMode: true,
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           centerPadding: "0px",

//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1400,
//         settings: {
//           centerMode: true,
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           centerPadding: "0px",

//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           centerMode: true,
//           slidesToShow: 3,
//           centerPadding: "0px",
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 850,
//         settings: { centerMode: true, slidesToShow: 2, slidesToScroll: 1 },
//       },
//       {
//         breakpoint: 650,
//         settings: { centerMode: true, slidesToShow: 1, slidesToScroll: 1 },
//       },

//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ],
//   };

//   const slideStyle = (index) => {
//     if (index === currentSlide) {
//       return { transform: "scale(1.1)" }; // Apply zoom effect to the center slide
//     }
//     return {};
//   };

//   return (
//     <div className="our-products-sec">
//       <div className="feature-head-part">
//         <p className="feature-head product-head">OUR PRODUCTS</p>
//       </div>
//       <div className="pro_slider_main">
//         <Slider {...settings}>
//           <div className="product-home-imgbox">
//             <img src={images.product_1} alt="" className="product-img" />
//           </div>
//           <div className="product-home-imgbox">
//             <img src={images.product_2} className="product-img" alt="" />
//           </div>
//           <div className="product-home-imgbox">
//             <img src={images.product_3} className="product-img" alt="" />
//           </div>
//           <div className="product-home-imgbox">
//             <img src={images.product_4} className="product-img" alt="" />
//           </div>
//           <div className="product-home-imgbox">
//             <img src={images.product_5} className="product-img" alt="" />
//           </div>
//           <div className="product-home-imgbox">
//             <img src={images.product_6} className="product-img" alt="" />
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default OurProducts;

import React, { useState } from "react";
import Slider from "react-slick";
import "./OurProducts.css"; // Import CSS for styling
import images from "../../constants/images";

function OurProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slickSettings = {
    arrows: false,
    centerMode: true,
    // centerPadding: "200px",
    slidesToShow: 4,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (slideIndex) => {
      setCurrentSlide(slideIndex);
    },
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          arrows: false,
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          arrows: false,
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const slideStyle = (index) => {
    if (index === currentSlide) {
      return { transform: "scale(0.8)" };
    }
    return {};
  };

  return (
    <div
      style={{
        // backgroundImage: `url(${images.section_bg1})`,
        backgroundImage: `url(${images.bg_image})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "cover",
        width: "100vw",
        // height: "34rem",
        // display: "flex",
        // alignItems: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}>
      <div className="our-products-sec">
        <div className="feature-head-part">
          <p className="red_heading" style={{ marginTop: "0px" }}>
            OUR PRODUCTS
          </p>{" "}
        </div>
        <div className="home-our-product-main">
          {/* <div className="pagination">
        {currentSlide + 1} of {slickSettings.slidesToShow}
      </div> */}
          <Slider {...slickSettings}>
            {/* Add your carousel slides here */}
            <div className="center img_div margin-less" style={slideStyle(0)}>
              <img src={images.sunflower_can} className="product-img" alt="" />
            </div>
            <div className="center img_div" style={slideStyle(1)}>
              <img src={images.groundnut_can} className="product-img " alt="" />
            </div>
            <div className="center img_div" style={slideStyle(2)}>
              <img src={images.cotton_can} className="product-img" alt="" />
            </div>
            <div className="center img_div" style={slideStyle(3)}>
              <img src={images.corn_can} className="product-img" alt="" />
            </div>
            <div className="center img_div" style={slideStyle(4)}>
              <img src={images.palmolein_can} className="product-img" alt="" />
            </div>
            <div className="center img_div" style={slideStyle(5)}>
              <img src={images.soyabean_can} className="product-img" alt="" />
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
