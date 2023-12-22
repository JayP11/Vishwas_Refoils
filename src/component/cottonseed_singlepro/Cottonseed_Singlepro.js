import React from "react";
import images from "../../constants/images";
import "./Cottonseed_Singlepro.css";
const Cottonseed_Singlepro = () => {
  return (
    <div
      className="pro_sunflower cottonseedsinglepro_res"
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
        <div className="pro_img_sunflower pro_img_cottonseed_main">
          <img
            src={images.Refined_Cottonseed_Oil_set}
            alt=""
            style={{ objectFit: "contain", width: "90%", height: "90%" }}
            className="img_sunflower"
          />
        </div>
        <div className="pro_det_sunflower">
          <div className="product_head">
            <h1 style={{ fontSize: "30px" }}>Refined Cottonseed Oil</h1>
          </div>
          <div style={{ textAlign: "justify" }}>
            <p>
              {" "}
              Vishwas Refined Cottonseed Oil is a premium cooking oil that
              offers exceptional quality and purity. Extracted from the finest
              cottonseeds using advanced refining techniques, this oil undergoes
              a rigorous process to ensure the removal of impurities while
              retaining its natural goodness. With its light and neutral flavor,
              Vishwas Refined Cottonseed Oil is perfect for all types of
              cooking, including frying, roasting, and baking, as it enhances
              the taste of the food without overpowering it. Additionally, it
              has a high smoking point, making it ideal for deep-frying,
              providing crispy and delicious results. Packed with essential
              nutrients and antioxidants, Vishwas Refined Cottonseed Oil
              promotes a healthy lifestyle and helps maintain overall
              well-being. It is a trusted choice for households and culinary
              professionals alike, offering reliability and consistent quality
              with every use
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cottonseed_Singlepro;
