import React from "react";
import "./InvestorDesk.css";
import images from "../../constants/images";
const InvestorDesk = () => {
  return (
    <div className="InvestorDesk_main">
      <div>
        <h1 className="red_heading" style={{ paddingTop: "1rem" }}>Investor Desk</h1>
        <h1 style={{textAlign:"center"}}>We Are Comming Soon.</h1>
      </div>

      <div className="boxes_main">
        <div className="boxes_inner">
          <div>
            <img src={images.management} alt="" />{" "}
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>
              About Management & Committees
            </h3>
          </div>
        </div>
        <div className="boxes_inner">
          <div>
            <img src={images.financialreport} alt="" />{" "}
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Financial Reports</h3>
          </div>
        </div>
        <div className="boxes_inner">
          <div>
            <img src={images.listing} alt="" />{" "}
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Listing Compliances</h3>
          </div>
        </div>
        <div className="boxes_inner">
          <div>
            <img src={images.annualreport} alt="" />{" "}
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Annual Reports</h3>
          </div>
        </div>
        <div className="boxes_inner">
          <div>
            <img src={images.policy} alt="" />{" "}
          </div>
          <div>
            <h3>Policies</h3>
          </div>
        </div>
        <div className="boxes_inner">
          <div>
            <img src={images.shareholding} alt="" />{" "}
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Shareholding Pattern</h3>
          </div>
        </div>
        <div className="boxes_inner">
          <div>
            <img src={images.announcement} alt="" />{" "}
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Notices & Announcement</h3>
          </div>
        </div>
        <div className="boxes_inner">
          <div>
            <img src={images.Prospectus} alt="" />{" "}
          </div>
          <div>
            <h3>Prospectus</h3>
          </div>
        </div>
        <div className="boxes_inner">
          <div>
            <img src={images.corporategov} alt="" />{" "}
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Corporate Governance</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDesk;
