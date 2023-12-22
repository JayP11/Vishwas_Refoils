import React from "react";
import "./FormCareer.css";
import { Link } from "react-router-dom";
const FormCareer = () => {
  return (
    <div className="FormCareer_main">
      <div className="form_head">
        <h1>Form</h1>
      </div>
      <div>
        <div className="form_block1">
          <div className="textbox_main">
            <input
              className="textbox"
              type="text"
              placeholder="Enter your full name"
              // value=""
            />
          </div>

          <div className="textbox_main">
            <input
              className="textbox"
              type="text"
              placeholder="Enter your contact number"
              // value=""
            />
          </div>
        </div>
        <div className="form_block2">
          <div className="textbox_main">
            <input
              className="textbox"
              type="email"
              id="email"
              placeholder="Enter your Email Address"
            />
          </div>
          <div className="textbox_main" action="#" style={{ width: "502px" }}>
            <select className="textbox textbox_add" name="position" id="lang">
              <option>Position to apply</option>
              <option value="Manager">Manager</option>
              <option value="Director">Director</option>
              <option value="CEO">CEO</option>
              <option value="Chartered Accountant">Chartered Accountant</option>
              <option value="Company Secretary">Company Secretary</option>
              <option value="Advocate">Advocate</option>
              <option value="Accountant">Accountant</option>
              <option value="Office Assistant">Office Assistant</option>
              <option value="Administrative">Administrative</option>
              <option value="Receptionist">Receptionist</option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Digital Marketer">Digital Marketer</option>
              <option value="Lab Technician">Lab Technician</option>
              <option value="Production Supervisor">
                Production Supervisor
              </option>
              <option value="Machine Operator">Machine Operator</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Store Incharge">Store Incharge</option>
              <option value="Retail Associate">Retail Associate</option>
              <option value="Research Analyst">Research Analyst</option>
              <option value="Data Entry Operator">Data Entry Operator</option>
              <option value="Civil Engineer">Civil Engineer</option>
              <option value="HR Manager">HR Manager</option>
              <option value="HR Assistant">HR Assistant</option>
              <option value="Customer Service Representative">
                Customer Service Representative
              </option>
              <option value="Sales Representative">Sales Representative</option>
              <option value="Marketing Head">Marketing Head</option>
              <option value="Auditor">Auditor</option>
              <option value="Others">Others</option>
            </select>
          </div>
          {/* <div className="textbox_main textbox_add_main">
            <label>Upload your CV : &nbsp;</label>
            <form className="" action="/action_page.php">
              <input type="file" id="myFile" name="filename"></input>
            </form>
          </div> */}
        </div>
        <div>
          <div className="address_block">
            <textarea
              id=""
              name=""
              rows="4"
              cols="50"
              placeholder="Your message to hiring manager."
            />
          </div>

          <div className="textbox_main textbox_add_main">
            <label>Upload your CV : &nbsp;</label>
            <form className="" action="/action_page.php">
              <input type="file" id="myFile" name="filename"></input>
            </form>
          </div>
        </div>

        <div className="submit_btn_block">
          <a href="">
            <button type="button" className="red_button shop_now_btn">
              Submit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormCareer;
