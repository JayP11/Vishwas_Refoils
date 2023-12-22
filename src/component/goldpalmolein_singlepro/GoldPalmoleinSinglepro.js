import React from "react";
import images from "../../constants/images";

const GoldPalmoleinSinglepro = () => {
  return (
    <div
      className="pro_sunflower"
      style={{
        backgroundImage: `url(${images.bg_product})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "initial",
        width: "100vw",
        // height: "40vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}>
      <div className="product_main">
        <div className="pro_img_sunflower">
          <img
            src={images.SunflowerOil_Products}
            alt=""
            className="img_sunflower"
          />
        </div>
        <div className="pro_det_sunflower">
          <div className="product_head">
            <h1 style={{ fontSize: "30px" }}>Gold Palmolein Oil</h1>
          </div>
          <div style={{ textAlign: "justify" }}>
            Vishwas Palmolein Oil is a premium cooking oil renowned for its
            exceptional quality and numerous health benefits. Extracted from the
            finest palm fruits, it undergoes a rigorous refining process to
            ensure purity and maintain its natural goodness. With its high smoke
            point, Vishwas Palmolein Oil is ideal for deep frying, baking, and
            stir-frying, offering a delectable taste and crisp texture to a wide
            range of dishes. This versatile oil contains a balanced composition
            of essential fatty acids, including mono unsaturated and
            polyunsaturated fats, which promote cardiovas cular health and help
            maintain cholesterol levels within a healthy range. Its vitamin E
            content provides antioxidant properties that contribute to overall
            well-being. Whether you're a professional chef or a passionate home
            cook, Vishwas Palmolein Oil is a trusted choice that brings out the
            best flavors in your culinary creations while prioritizing your
            health and nutrition.
          </div>
          <div>
            <h3>Available in</h3>
            <div className="icons_main">
              <div className="packing_info">
                <div>
                  <img src={images.bottle} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
                </div>
              </div>
              <div>
                <div>
                  <img src={images.pouch} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
                </div>
              </div>
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
                </div>
              </div>
              <div>
                <div>
                  <img src={images.can_big} alt="" className="packing_icons" />
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
      </div>{" "}
      {/* <img src={images.flower} style={{ position: "relative" }} alt="" /> */}
    </div>
  );
};

export default GoldPalmoleinSinglepro;
