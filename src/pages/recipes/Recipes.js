import React, { useEffect } from "react";
import RecipesComp from "../../component/recipes_comp/RecipesComp";
import { Helmet } from "react-helmet";

const Recipes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Recipes</title>
      </Helmet>
      <div>
        <RecipesComp />
      </div>
    </>
  );
};

export default Recipes;
