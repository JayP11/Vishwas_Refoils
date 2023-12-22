import React from "react";
import images from "../../constants/images";
import "./PalmoleinSinglepro.css";
const PalmoleinSinglepro = () => {
  return (
    <div
      className="pro_sunflower palmolien_singleproduct_bgimage"
      style={{
        backgroundImage: `url(${images.bg_product})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "initial",
        width: "100vw",
        // height: "40vh",
        display: "flex",
        alignItems: "center",
      }}>
      <div className="product_main">
        <div className="img_palmoean_all_pro_main">
          <img
            src={images.Palmolean_Products}
            alt=""
            className="img_palmoean_all_pro"
          />
        </div>
        <div className="pro_det_sunflower">
          <div className="product_head">
            <h1 style={{ fontSize: "30px" }}>Refined Palmolein Oil</h1>
          </div>
          <div>
            <p style={{ textAlign: "justify" }}>
              Introducing our premium Refined Palmolein Oil, a culinary delight
              that elevates your cooking experience to new heights. Sourced from
              the finest palm fruits and processed with precision, our oil
              undergoes a meticulous refining process to ensure the highest
              quality and purity. Known for its neutral flavor profile and high
              smoke point, Refined Palmolein Oil is the ideal companion for a
              wide range of culinary applications, from sautéing and frying to
              baking. Its versatility is matched only by its commitment to
              health, as it is naturally cholesterol-free and low in saturated
              fats. Elevate your dishes with the golden touch of Refined
              Palmolein Oil, where purity meets perfection in every drop.
            </p>
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
                  <h5 style={{ margin: "4px", textAlign: "center" }}>2L</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>5L</h5>
                </div>
              </div>
              <div>
                <div>
                  <img src={images.tin} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15KG</h5>
                </div>
              </div>
              {/* <div>
                <div>
                  <img src={images.tin} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                </div>
              </div> */}
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

export default PalmoleinSinglepro;
