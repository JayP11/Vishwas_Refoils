import React, { useEffect } from "react";
import images from "../../constants/images";
import "./Recpabhaji.css";

const Recpabhaji = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Recipeonedetail-sec">
      <div className="Recipeonedetail-con">
        <div className="Recipeonedetail-imgbox extra-height-img-box">
          <img alt=""
            src={images.rec_pavbhaji_detail}
            className="Recipeonedetail-img extra-height-img"
          />
          <div className="Recipeonedetail-imgbox-inner">
            <div className="Recipeonedetail-inner-flex">
              <div className="Recipeonedetail-heading">
                <p className="Recipeonedetail-head">Pav Bhaji</p>
              </div>
              <div className="Recipeonedetail-inner-flex-con">
                <div className="Recipeonedetail-flex-part">
                  <div className="Recipeonedet-expart-flex">
                    <div>
                      <p className="Recipedet-heading">Ingredients :</p>
                      <p className="Recipedet-sub-heading">
                        Ingredients for Bhaji :
                      </p>
                      <ul className="Recipedet-lists">
                        <li className="Recipedet-list">
                          1 medium size Cauliflower, florets
                        </li>
                        <li className="Recipedet-list">
                          1 Capsicum, roughly chopped
                        </li>
                        <li className="Recipedet-list">
                          1/2 inch Ginger, slice
                        </li>
                        <li className="Recipedet-list">2-3 Garlic, chopped</li>
                        <li className="Recipedet-list">Water</li>
                        <li className="Recipedet-list">
                          5 medium Potato, cubed
                        </li>
                        <li className="Recipedet-list">
                          1 Carrots, pelled, roughly chopped
                        </li>
                        <li className="Recipedet-list">1/2 cup Green peas</li>
                        <li className="Recipedet-list">
                          <li className="Recipedet-list">Salt to taste</li>
                        </li>
                        <li className="Recipedet-list">
                          <li className="Recipedet-list">2-3 tbsp Butter</li>
                        </li>
                      </ul>

                      <p className="Recipedet-sub-heading">
                        Ingredients for Tempering :
                      </p>
                      <ul className="Recipedet-lists">
                        <li className="Recipedet-list">1 cup Onion, chopped</li>
                        <li className="Recipedet-list">
                          1 1/2 cup Tomato, chopped
                        </li>
                        <li className="Recipedet-list">
                          2-3 Green chilli, chopped
                        </li>
                        <li className="Recipedet-list">2-3 tbsp Butter</li>
                        <li className="Recipedet-list">1/4 cup Oil</li>
                        <li className="Recipedet-list">
                          1/2 tbsp Ginger Garlic paste
                        </li>
                        <li className="Recipedet-list">Salt to taste</li>
                        <li className="Recipedet-list">
                          1/4 cup fresh Tomato puree
                        </li>
                        <li className="Recipedet-list">
                          <li className="Recipedet-list">
                            1 medium Capsicum, chopped
                          </li>
                        </li>
                        <li className="Recipedet-list">2 tbsp Butter</li>
                        <li className="Recipedet-list">
                          1 tbsp Prepared pav bhaji masala
                        </li>
                        <li className="Recipedet-list">
                          Boiled & mashed vegetables
                        </li>
                        <li className="Recipedet-list">1 tbsp Butter</li>
                        <li className="Recipedet-list">
                          2 tbsp Prepared pav bhaji masala
                        </li>
                        <li className="Recipedet-list">Water</li>
                        <li className="Recipedet-list">1/4 tsp Sugar</li>
                        <li className="Recipedet-list">
                          1 tbsp Coriander leaves, chopped
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="Recipedet-sub-heading">
                        For Toasting Pav :
                      </p>
                      <ul className="Recipedet-lists">
                        <li className="Recipedet-list">1 tbsp Butter</li>
                        <li className="Recipedet-list">
                          A pinch of degi red chilli powder
                        </li>
                        <li className="Recipedet-list">2 Ladi pav</li>
                      </ul>

                      <p className="Recipedet-sub-heading">For Garnish :</p>
                      <ul className="Recipedet-lists">
                        <li className="Recipedet-list">Onion, chopped</li>
                        <li className="Recipedet-list">Lemon wedge</li>
                        <li className="Recipedet-list">Butter pav</li>
                        <li className="Recipedet-list">Coriander sprig</li>
                      </ul>

                      <p className="Recipedet-sub-heading">For Masala Pav :</p>
                      <ul className="Recipedet-lists">
                        <li className="Recipedet-list">1 tbsp Butter</li>
                        <li className="Recipedet-list">Prepared Masala</li>
                        <li className="Recipedet-list">2 Ladi pav</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="Recipeonedetail-flex-part">
                  <p className="Recipedet-sub-heading">How to make Bhaji :</p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      1. In a large pot or pressure cooker add cauliflower,
                      capsicum, ginger, garlic, water, potato, carrot, green
                      peas, salt, butter then cover and cook until soft.
                    </li>
                    <li className="Recipedet-list">
                      2. Now mash everything properly with a masher and set
                      aside.
                    </li>
                  </ul>

                  <p className="Recipedet-sub-heading">For Tempering :</p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      1. In a large tava or a shallow pan heat butter, oil then
                      add onion and saute until translucent.
                    </li>
                    <li className="Recipedet-list">
                      2. Now add tomatoes, green chillies, ginger garlic paste,
                      salt and saute until they are soft.
                    </li>
                    <li className="Recipedet-list">
                      3. Add fresh tomato puree and continue cooking for 6-8
                      minutes.
                    </li>
                    <li className="Recipedet-list">
                      4. Then add capsicum and continue cooking for another 2
                      minutes. Once done remove 2-3 tbsp masala aside for
                      further use.
                    </li>
                    <li className="Recipedet-list">
                      5. Now, add degi red chilli powder, butter, pav bhaji
                      masala and saute for a minute.
                    </li>
                    <li className="Recipedet-list">
                      6. Now, add boiled & mashed vegetables, butter, pav bhaji
                      masala, water, sugar and continue cooking for another 2-3
                      minutes.
                    </li>
                    <li className="Recipedet-list">
                      7. Finish the pav bhaji with fresh coriander leaves and
                      switch off the flames.
                    </li>
                    <li className="Recipedet-list">
                      8. Serve hot with toasted pav, onion, lemon wedges,
                      coriander leaves.
                    </li>
                  </ul>
                  <div className="Recipedet-expart"></div>

                  <p className="Recipedet-sub-heading">For Toasting Pav :</p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      1. In a hot pan add butter degi red chilli powder and coat
                      the pav in that inside out and toast it properly, set
                      aside for further use.
                    </li>
                  </ul>

                  <p className="Recipedet-sub-heading">For Masala Pav :</p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      1. In a hot pan add butter, prepared masala that was kept
                      aside then coat the pav inside out properly and then toast
                      it. Set aside for further use.
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

export default Recpabhaji;
