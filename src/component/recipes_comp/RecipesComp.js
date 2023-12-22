// import React from "react";
// import "./RecipesComp.css";

// const RecipesComp = () => {
//     return (
//       <div className="RecipesComp_main">
//         <div>
//           <h1 className="red_heading">Recipes</h1>
//           <h3 style={{textAlign:"center"}}>
//             Taste the delicious possibilities with these easy, everyday recipes
//           </h3>
//         </div>
//       </div>
//     );
// };

// export default RecipesComp;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipesComp.css";
import images from "../../constants/images";
import { AnimationOnScroll } from "react-animation-on-scroll";
const RecipesComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="res-sec">
      <div>
        <h1 className="red_heading">Recipes</h1>
        <h3 style={{ textAlign: "center" }}>
          Taste the delicious possibilities with these easy, everyday recipes
        </h3>
      </div>
      <div className="res-con box animate fadeInLeft three">
        {/* <AnimationOnScroll
          animateIn="fadeInDown"
          animateOut="animate__bounceOutDown"> */}
        <Link to="/recfafdajalebi" className="desc_main1">
          <div className="res-imgbox">
            <img src={images.rec_1} alt="recipe" className="recipe-img" />
          </div>
        </Link>
        {/* </AnimationOnScroll> */}

        <Link to="/recpalakpaneer">
          <div className="res-imgbox">
            <img src={images.rec_2} alt="recipe" className="recipe-img" />
          </div>
        </Link>
        <Link to="/recpavbhaji" onClick={() => console.log("clicked")}>
          <div className="res-imgbox">
            <img src={images.rec_3} alt="recipe" className="recipe-img" />
          </div>
        </Link>

        <Link to="/recdalbaatichurma" className="certificate_img2_main">
          <div className="res-imgbox">
            <img src={images.rec_4} alt="recipe" className="recipe-img" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecipesComp;
