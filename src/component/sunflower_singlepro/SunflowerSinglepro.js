import React from "react";
import "./SunflowerSinglepro.css";
import images from "../../constants/images";
import { AnimationOnScroll } from "react-animation-on-scroll";
import SunflowerSinglePro from "./SunflowerSinglepro.css";

const SunflowerSinglepro = () => {
  return (
    <div
      className="pro_sunflower pro_singlesunflower_responsive"
      style={{
        backgroundImage: `url(${images.bg_product})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "initial",
        width: "100vw",
        height: "34rem",
        display: "flex",
        alignItems: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}>
      <div className="product_main">
        {/* <div style={{ position: "relative" }}> */}

        <div className="pro_img_sunflower pro_img_sunflower_specific">
          <img
            src={images.Refined_Sunflower_Oil_set}
            alt=""
            className="img_sunflower img_sunflower_specific"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="pro_det_sunflower">
          <div className="product_head">
            <h1 style={{ fontSize: "30px" }}>Refined Sunflower Oil</h1>
          </div>
          <div style={{ textAlign: "justify", lineHeight: "" }}>
            <p>
              Vishwas Sunflower Oil is a premium cooking oil that epitomizes
              excellence in quality and taste. Made from carefully selected
              sunflower seeds, this oil undergoes a rigorous extraction process
              to ensure purity and freshness. With its light golden color and a
              mild flavor, Vishwas Sunflower Oil is a versatile choice for
              various culinary applications, from sautéing and frying to baking
              and dressing. Its high smoke point makes it ideal for
              high-temperature cooking, allowing you to achieve deliciously
              crispy and perfectly cooked dishes. Not only does it add a
              delightful flavor to your meals, but Vishwas Sunflower Oil is also
              a rich source of essential fatty acids, vitamin E, and antioxi
              dants, promoting a healthy lifestyle. Whether you're a
              professional chef or a passionate home cook, Vishwas Sunflower Oil
              is the ultimate choice to elevate your cooking experience with its
              unmatched quality and delightful taste
            </p>{" "}
          </div>
          <div>
            <h3>Available in</h3>
            <div className="icons_main">
              <div className="packing_info">
                <div>
                  <img src={images.bottle} alt="" className="packing_icons" />
                </div>
                <div>
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5> */}
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
                </div>
              </div>
              <div>
                <div>
                  <img src={images.pouch} alt="" className="packing_icons" />
                </div>
                <div>
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5> */}
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
                </div>
              </div>
              {/* <div>
                <div>
                  <img
                    src={images.can_small}
                    alt=""
                    className="packing_icons"
                  />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>5L</h5>
                </div>
              </div> */}
              <div>
                <div>
                  <img
                    src={images.can_small}
                    alt=""
                    className="packing_icons"
                  />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>5L</h5>
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5> */}
                </div>
              </div>
              <div>
                <div>
                  <img
                    src={images.bucket_icon}
                    alt=""
                    className="packing_icons"
                  />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                </div>
              </div>
              <div>
                <div>
                  <img src={images.tap_jar} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                </div>
              </div>
              <div>
                <div>
                  <img src={images.tin} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                </div>
              </div>
              {/* <img
                src={images.flower}
                alt=""
              /> */}
            </div>
          </div>
        </div>
        {/* <img src={images.flower} style={{ position: "absolute" }} alt="" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SunflowerSinglepro;
