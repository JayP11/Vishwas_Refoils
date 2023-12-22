import React from "react";
import images from "../../constants/images";
import "./CastorSinglepro.css";

const CastorSinglepro = () => {
  return (
    <div
      className="pro_sunflower castorsinglepro_res"
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
        <div className="pro_img_sunflower pro_img_castor_main">
          <img
            // src={images.castor_Singlepro}
            src={images.Castor_Oil_set}
            alt=""
            style={{ objectFit: "contain", height: "65%", width: "65%" }}
            className="img_sunflower"
          />
        </div>
        <div className="pro_det_sunflower">
          <div className="product_head">
            <h1 style={{ fontSize: "30px" }}>Refined Castor Oil</h1>
          </div>
          <div style={{ textAlign: "justify" }}>
            <p>
              Vishwas Castor Oil Specialties is a renowned company that excels
              in the production and distribution of high-quality castor
              oil-based products. With a strong commitment to innovation,
              sustainability, and customer satisfaction, they offer a diverse
              range of specialty castor oil derivatives for various industries.
              Their extensive product portfolio includes refined castor oil,
              hydrogenated castor oil, dehydrated castor oil, and various grades
              of castor oil derivatives tailored to meet specific customer
              requirements. Vishwas Castor Oil Specialties maintains strict
              quality control measures throughout their manufacturing processes
              to ensure consistent excellence in their products. Their dedicated
              team of experts combines deep industry knowledge with cutting-edge
              technology to deliver customized solutions and exceptional service
              to clients worldwide. Whether it's in the pharmaceutical,
              cosmetic, lubricant, or other sectors, Vishwas Castor Oil
              Specialties is a trusted partner that continues to redefine the
              standards of castor oil specialties.
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
              {/* <div>
                <div>
                  <img src={images.pouch} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
                </div>
              </div> */}
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
                  <img src={images.tin} alt="" className="packing_icons" />
                </div>
                <div>
                  {/* <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5> */}
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15KG</h5>
                </div>
              </div>
              {/* <div>
                <div>
                  <img src={images.tin} alt="" className="packing_icons" />
                </div>
                <div>
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

export default CastorSinglepro;
