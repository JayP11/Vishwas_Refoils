import React from "react";
import images from "../../constants/images";
import "./CornSinglepro.css";
const CornSinglepro = () => {
  return (
    <div
      className="pro_sunflower cornsinglepro_res"
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
        <div className="pro_img_sunflower  pro_img_corn_main">
          <img
            src={images.Refined_Corn_Oil_set}
            alt=""
            style={{ objectFit: "contain", height: "90%", width: "90%" }}
            className="img_sunflower"
          />
        </div>
        <div className="pro_det_sunflower">
          <div className="product_head">
            <h1 style={{ fontSize: "30px" }}>Refined Corn Oil</h1>
          </div>
          <div style={{ textAlign: "justify" }}>
            <p>
              {" "}
              Vishwas Refined Corn Oil is a high-quality cooking oil that offers
              a multitude of benefits. Extracted from carefully selected corn
              kernels, this oil undergoes a meticulous refining process to
              ensure purity and excellence. With its light texture and neutral
              taste, Vishwas Refined Corn Oil is perfect for a variety of
              culinary applications. Whether you're frying, boiling, baking, or
              simply dressing a salad, this oil delivers exceptional
              performance, allowing the natural flavors of your dishes to shine
              through. Not only does Vishwas Refined Corn Oil enhance the taste
              and aroma of your favorite recipes, but it is also rich in
              essential nutrients such as Vitamin E and antioxidants, which
              promote overall well-being. Its high smoke point ensures that it
              remains stable even at high temperatures, making it ideal for deep
              frying and stir-frying. Additionally, Vishwas Refined Corn Oil is
              low in saturated fat, making it a heart-healthy choice for those
              looking to maintain a balanced diet. Elevate your cooking
              experience with Vishwas Refined Corn Oil, a versatile and
              nutritious option that will inspire your culinary creations.
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
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5> */}
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
                </div>
              </div>
              {/* <div>
                <div>
                  <img src={images.pouch} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
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
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>15KG</h5> */}
                </div>
              </div>
              <div>
                <div>
                  <img src={images.tap_jar} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>15KG</h5> */}
                </div>
              </div>
              <div>
                <div>
                  <img src={images.tin} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>15KG</h5> */}
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

export default CornSinglepro;
