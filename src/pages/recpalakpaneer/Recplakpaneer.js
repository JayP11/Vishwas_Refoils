import React, { useEffect } from "react";
import images from "../../constants/images";

const Recplakpaneer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="Recipeonedetail-sec">
        <div className="Recipeonedetail-con">
          <div className="Recipeonedetail-imgbox">
            <img
              src={images.rec_palak_paneer}
              className="Recipeonedetail-img"
            />
            <div className="Recipeonedetail-imgbox-inner">
              <div className="Recipeonedetail-inner-flex">
                <div className="Recipeonedetail-heading">
                  <p className="Recipeonedetail-head">Palak Paneer</p>
                </div>
                <div className="Recipeonedetail-inner-flex-con">
                  <div className="Recipeonedetail-flex-part">
                    <p className="Recipedet-heading">Ingredients :</p>
                    <p className="Recipedet-sub-heading">
                      Ingredients for Palak Paneer :
                    </p>
                    <ul className="Recipedet-lists">
                      <li className="Recipedet-list">
                        500 gms Spinach, pureed
                      </li>
                      <li className="Recipedet-list">15-16 Paneer cubes</li>
                      <li className="Recipedet-list">2 tbsp Oil</li>
                      <li className="Recipedet-list">1 tsp Cumin seeds</li>
                      <li className="Recipedet-list">1 Bay leaf</li>
                      <li className="Recipedet-list">
                        1 tsp Ginger, finely chopped
                      </li>
                      <li className="Recipedet-list">
                        1 tsp Garlic, finely chopped
                      </li>
                      <li className="Recipedet-list">
                        1 cup Onion paste (boiled), grated
                      </li>
                      <li className="Recipedet-list">1/2 cup Tomato, pureed</li>
                      <li className="Recipedet-list">2 tsp Salt</li>
                      <li className="Recipedet-list">1/2 tsp Garam masala</li>
                      <li className="Recipedet-list">
                        1/2 tsp Red pepper, powdered
                      </li>
                      <li className="Recipedet-list">
                        1/2 tsp Coriander powder
                      </li>
                      <li className="Recipedet-list">
                        2 nos Black cardamom (crushed)
                      </li>
                      <li className="Recipedet-list">1 tbsp Cream</li>
                    </ul>
                  </div>
                  <div className="Recipeonedetail-flex-part">
                    <p className="Recipedet-sub-heading">
                      How to make Palak Paneer :
                    </p>
                    <ul className="Recipedet-lists">
                      <li className="Recipedet-list">
                        1. Boil spinach in a pressure cooker and grind it to
                        make palak puree.
                      </li>
                      <li className="Recipedet-list">
                        2. Heat oil in a pan and fry paneer cubes in it until
                        golden brown.
                      </li>
                      <li className="Recipedet-list">
                        3. Remove the paneer cubes and put cumin, when it
                        splutters, add bay leaf.
                      </li>
                      <li className="Recipedet-list">
                        4. When it starts to crackle add ginger, garlic and
                        onion paste. Cook until it gets pinkish- brown in color.
                      </li>
                      <li className="Recipedet-list">
                        5. Add salt, garam masala, coriander powder along with
                        red pepper. Stir till well mixed.
                      </li>
                      <li className="Recipedet-list">
                        6. Now, add tomato puree and stir fry over medium heat.
                      </li>
                      <li className="Recipedet-list">
                        7. Add spinach and saute for 2-3 minutes.
                      </li>
                      <li className="Recipedet-list">
                        8. Now, add paneer cubes to the mix and turn around a
                        few times to completely mix it with the palak gravy.
                      </li>
                      <li className="Recipedet-list">
                        9. Pour some cream over, mix well and serve hot.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recplakpaneer;
