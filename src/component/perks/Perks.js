import React from "react";
import "./Perks.css";
import images from "../../constants/images";
const Perks = () => {
  return (
    <div className="perks_main">
      <div>
        <h1 className="red_heading">Perks & Benefits</h1>
      </div>
      <div className="perks_main_inner">
        <div className="card_main">
          <div className="card">
            <img src={images.professional_development} className="card_img" />
          </div>
          <div>
            <h3 className="perk-card-head">Professional Development</h3>
          </div>
          <div>
            <p className="perk-card-txt">
              Continuous learning and professional development enable you to
              adopt to change circumstances and take on new challenges with
              confidence. We often encourage or even provide professional
              development opportunities for our employees because it leads to a
              more skilled and motivated workforce.
            </p>
          </div>
        </div>
        <div className="card_main">
          <div className="card">
            <img src={images.salary} className="card_img" />
          </div>
          <div>
            <h3 className="perk-card-head">Above Average Salaries</h3>
          </div>
          <div>
            <p className="perk-card-txt">
              To attract and retain skilled professionals, many FMCG companies
              offer above-average salaries. We examine your abilities and take
              into account the best-in-class annual salary packages for your
              place of employment. The company believes in retention of the
              employees that work for our company and give their best efforts to
              make a difference.
            </p>
          </div>
        </div>
        <div className="card_main">
          <div className="card">
            <img src={images.soft_skills} className="card_img" />
          </div>
          <div>
            <h3 className="perk-card-head">Soft Skill Development</h3>
          </div>
          <div>
            <p className="perk-card-txt">
              Soft skill development is of great importance in both personal and
              professional contexts. These skills, often referred to as
              interpersonal skills, complement your technical or hard skills and
              play a crucial role in your overall success and well-being. Our
              company provides various soft skill development programs for our
              employees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
