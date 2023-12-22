import React from "react";
import "./Message.css";

const Message = () => {
  return (
    <div className="Message_main">
      <div>
        <h1 className="red_heading">Chairman's Message</h1>
      </div>
      <div>
        <h2>Welcome to Vishwas Refoils & Consumer Limited</h2>
      </div>
      <div style={{textAlign:"justify"}}>
        <p>
          As the Chairman of this esteemed institution, I am truly honoured to
          extend a warm and heartfelt welcome to all our visitors, partners, and
          stakeholders. Our journey at Vishwas group is driven by a vision to
          make a positive impact on our community and the world at large.{" "}
        </p>
        <p>
          Our commitment to excellence, innovation, and integrity has been the
          cornerstone of our success. At Vishwas group, we firmly believe in the
          power of knowledge, education, and collaboration to drive meaningful
          change. Our dedicated team, along with our valued partners and
          supporters, works tirelessly to transform this belief into reality.
        </p>
        <p>
          In an ever-changing world, we are dedicated to stay at the forefront
          of knowledge and technology, striving to create solutions that address
          current and future challenges. Our commitment to sustainability and
          social responsibility underscores our desire to contribute positively
          to our society and the environment.
        </p>
        <p>
         We look forward to your support and
          partnership as we continue our journey of making a difference in the
          lives of individuals and the betterment of society.
        </p>
        <p>
          Thank you for visiting us and for being a part of our mission.
          Together, we can shape a brighter future.
        </p>
        <p>Warm regards,</p>
        <p>
          Mr. Deepak Mandhiyani
          <br /> Chairman cum Managing Director
          <br /> Vishwas Refoils & Consumer Limited
        </p>
      </div>
    </div>
  );
};

export default Message;
