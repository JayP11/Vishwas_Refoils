import React from "react";
import images from "../../constants/images";
// import "./HeroGroundnut.css";
import "./GroundnutSinglepro.css";
const GroundnutSinglepro = () => {
  return (
    <div
      className="pro_sunflower groundnutsinglepro_res"
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
        <div className="pro_img_sunflower pro_img_groundnut_main">
          <img
            src={images.groundnut_Oil_set}
            alt=""
            className="img_sunflower"
            style={{ objectFit: "cover",width:"85%" }}
          />
        </div>
        <div className="pro_det_sunflower">
          <div className="product_head">
            <h1 style={{ fontSize: "30px" }}>Double Filtered Groundnut Oil</h1>
          </div>
          <div>
            <p style={{ textAlign: "justify" }}>
              Vishwas Double Filtered Groundnut Oil is a premium cooking oil
              that stands out for its exceptional quality and health benefits.
              Produced using a meticulous process, it undergoes double
              filtration, ensuring purity and the removal of any impurities or
              sediments. This oil is derived from carefully selected,
              high-quality groundnuts, known for their rich flavor and
              nutritional value. The double filtration technique employed by
              Vishwas guarantees a crystal-clear, transparent oil that retains
              its natural aroma and taste. Moreover, this process enhances the
              oil's stability, making it ideal for a variety of cooking methods,
              including frying, stir-frying, and deep-frying. Vishwas Double
              Filtered Groundnut Oil is packed with essential nutrients,
              including monounsaturated fats and vitamin E, promoting heart
              health and providing antioxidants. It is also low in saturated
              fats, making it a healthier alternative to other cooking oils.
              With its impeccable quality, purity, and health benefits, Vishwas
              Double Filtered Groundnut Oil is the perfect choice for discerning
              individuals who prioritize both taste and well-being in their
              culinary endeavors.
            </p>
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Available in</h3>
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
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5> */}
                </div>
              </div>
              <div>
                <div>
                  <img src={images.tap_jar} alt="" className="packing_icons" />
                </div>
                <div>
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>5L</h5> */}
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
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
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15KG</h5>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundnutSinglepro;
