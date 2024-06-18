import React, { useEffect } from "react";
import images from "../../constants/images";
import "./Recdalbaatichurma.css";

const Recdalbaatichurma = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Recipeonedetail-sec">
      <div className="Recipeonedetail-con">
        <div className="Recipeonedetail-imgbox">
          <img
            src={images.rec_dal_baati_churma}
            className="Recipeonedetail-img"
          />
          <div className="Recipeonedetail-imgbox-inner">
            <div className="Recipeonedetail-inner-flex">
              <div className="Recipeonedetail-heading">
                <p className="Recipeonedetail-head">Dal Baati Churma</p>
              </div>
              <div className="Recipeonedetail-inner-flex-con">
                <div className="Recipeonedetail-flex-part">
                  <p className="Recipedet-heading">Ingredients:</p>
                  <p className="Recipedet-sub-heading">
                    Ingredients for Bati and Churma :
                  </p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      2 cups Whole Wheat Flour , (or a combination of flours)
                    </li>
                    <li className="Recipedet-list">
                      1 cup Sooji (Semolina/ Rava)
                    </li>
                    <li className="Recipedet-list">1/2 cup Ghee</li>
                    <li className="Recipedet-list">
                      1 teaspoon Ajwain (Carom seeds)
                    </li>
                    <li className="Recipedet-list">1 teaspoon Baking powder</li>
                    <li className="Recipedet-list">Salt , to taste</li>
                    <li className="Recipedet-list">
                      1/4 cup Jaggery , for churma
                    </li>
                  </ul>

                  <p className="Recipedet-sub-heading">Ingredients for Dal :</p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      1/4 cup Green Moong Dal (Split)
                    </li>
                    <li className="Recipedet-list">
                      1/4 cup Black Urad Dal (Split)
                    </li>
                    <li className="Recipedet-list">
                      1/4 cup Chana dal (Bengal Gram Dal)
                    </li>
                    <li className="Recipedet-list">1 Onion , finely chopped</li>
                    <li className="Recipedet-list">
                      1 inch Ginger , finely chopped
                    </li>
                    <li className="Recipedet-list">1 Green Chilli , slit</li>
                    <li className="Recipedet-list">
                      3 clove Garlic , finely chopped
                    </li>
                    <li className="Recipedet-list">
                      1 Tomato , finely chopped
                    </li>
                    <li className="Recipedet-list">
                      <li className="Recipedet-list">1 Bay leaf (tej patta)</li>
                    </li>
                    <li className="Recipedet-list">
                      1 inch Cinnamon Stick (Dalchini)
                    </li>
                    <li className="Recipedet-list">
                      1 teaspoon Turmeric powder (Haldi)
                    </li>
                    <li className="Recipedet-list">
                      1 teaspoon Garam masala powder
                    </li>
                    <li className="Recipedet-list">
                      5 sprig Coriander (Dhania) Leaves , chopped
                    </li>
                  </ul>

                  <p className="Recipedet-sub-heading">
                    Ingredients for Tadka :
                  </p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">1 teaspoon Ghee</li>
                    <li className="Recipedet-list">
                      1 teaspoon Cumin seeds (Jeera)
                    </li>
                    <li className="Recipedet-list">
                      2 Dry Red Chillies , halved
                    </li>
                  </ul>
                </div>
                <div className="Recipeonedetail-flex-part">
                  <p className="Recipedet-sub-heading">
                    How to make Dal Bati Churma :
                  </p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      1. To begin making the Dal Baati Churma Recipe, we will
                      first making the bati.
                    </li>
                    <li className="Recipedet-list">
                      2. Combine all the ingredients for the Bati together,
                      except the jaggery until well combined. Add water to
                      combine it well and make a smooth and yet stiff dough.
                      Leave the bati dough aside for 20 minutes so it rests and
                      becomes fluffy with the baking powder that we added.
                    </li>
                    <li className="Recipedet-list">
                      3. Once the baat dough is well rested, knead again for a
                      few minutes.
                    </li>
                    <li className="Recipedet-list">
                      4. Divide the dough in large lemon size portions (about 12
                      to 15 of them). Preheat the oven to 180 C and bake the
                      bati in the oven for about 20 to 30 minutes until browned
                      on both sides.
                    </li>
                    <li className="Recipedet-list">
                      5. Make sure to keep turning the baatis around, until it
                      is browned from all sides. The batis will tend to crack
                      from the top while it is baking and that's completely
                      natural.
                    </li>
                    <li className="Recipedet-list">
                      6. Once the batis are golden brown in color from all
                      sides, remove them from the oven.
                    </li>
                    <li className="Recipedet-list">
                      7. For the churma, I usually make it from the same baked
                      bati balls. Take 3 to 4 of them, crush them and combine
                      them with jaggery in a mixer to make a coarse powder. And
                      that's it, churma is ready. The salt from the batis does
                      not overwhelm the taste and tastes perfectly fine.
                    </li>
                    <li className="Recipedet-list">
                      8. The next step is to make the dal for the dal bati.
                    </li>
                    <li className="Recipedet-list">
                      9. To make the dal, add all the ingredients into the
                      pressure cooker, except the ingredients for the tadka.
                    </li>
                    <li className="Recipedet-list">
                      10. Add 2-1-/2 cups of water and pressure-cook the dal for
                      two to three whistles. After two whistles, turn the heat
                      to low and simmer for 10 minutes and turn off the heat.
                    </li>
                    <li className="Recipedet-list">
                      11. Once the pressure is released completely, open the
                      cooker and your dal is ready. Check the salt and spices
                      and adjust to suit your taste. Transfer the dal to a
                      serving bowl.
                    </li>
                    <li className="Recipedet-list">
                      12. The next step is to make the tadka. Heat ghee in a
                      small pan, add the cumin seeds and red chilies. Allow them
                      to roast and crackle. Once done, turn off the heat and
                      pour the seasoning over the dal and serve with the hot
                      baatis.
                    </li>
                    <li className="Recipedet-list">
                      13. Serving baatis are usually done in individual portions
                      and bowls.
                    </li>
                    <li className="Recipedet-list">
                      14. In a small serving bowl, add 2 batis, lightly crush
                      them, drizzle some ghee over the baked baatis. Pour the
                      dal over the baked baatis and serve. I personally like to
                      add the churma over the baatis as well to give it a sweet
                      touch and a delicious taste as well.
                    </li>
                    <li className="Recipedet-list">
                      15. Serve the Dal Bati Churma for a wholesome weekend
                      lunch or even for parties with friends.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recdalbaatichurma;
