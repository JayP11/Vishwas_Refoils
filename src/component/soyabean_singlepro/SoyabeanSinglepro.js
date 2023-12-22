import React from "react";
import images from "../../constants/images";
import "./SoyabeanSinglepro.css";

const SoyabeanSinglepro = () => {
  return (
    <div
      className="pro_sunflower soyasinglepro_res"
      style={{
        backgroundImage: `url(${images.bg_product})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "initial",
        width: "100vw",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}>
      <div className="product_main">
        <div className="pro_img_sunflower  pro_img_soya">
          <img
            src={images.All_Soya}
            alt=""
            style={{ width: "75%", objectFit: "cover", height: "90%" }}
            className="img_sunflower"
          />
        </div>
        <div className="pro_det_sunflower">
          <div className="product_head">
            <h1 style={{ fontSize: "30px" }}>Refined Soyabean Oil</h1>
          </div>
          <div>
            <p style={{ textAlign: "justify" }}>
              Your daily dose of flavor and vitality. A high vegetarian source
              of omega-3 fats, vishwas refined soyabean oil will improve your
              health and the flavor of your food.Vegetable oil made from soybean
              seeds is known as soybean oil. Up to 23% of the oil's fats are
              monounsaturated, and up to 60% are polyunsaturated. About 450°F
              (230°C) is the high smoke point of soybean oil. This enables it to
              resist high temperatures without degrading, making it a fantastic
              choice for high-heat culinary techniques like roasting, baking,
              frying, and sautéing.
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
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5>
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
              {/* <div>
                <div>
                  <img src={images.can_big} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                </div>
              </div> */}
              <div>
                <div>
                  <img src={images.tin} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15KG</h5>
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

export default SoyabeanSinglepro;
