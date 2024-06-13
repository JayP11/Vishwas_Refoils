import React, { useEffect } from "react";
import images from "../../constants/images";
import "./Recfafdajalebi.css";
const Recfafdajalebi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Recipeonedetail-sec">
      <div className="Recipeonedetail-con">
        <div className="Recipeonedetail-imgbox Recipeonedetail_imgbox_fafdajalebi">
          <img alt="" src={images.rec_fafdajalebi} className="Recipeonedetail-img" />
          <div className="Recipeonedetail-imgbox-inner">
            <div className="Recipeonedetail-inner-flex">
              <div className="Recipeonedetail-heading">
                <p className="Recipeonedetail-head">Fafda Jalebi</p>
              </div>
              <div className="Recipeonedetail-inner-flex-con">
                <div className="Recipeonedetail-flex-part">
                  <p className="Recipedet-heading">Ingredients:</p>
                  <p className="Recipedet-sub-heading">
                    Ingredients for Fafda :
                  </p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      Gram Flour / Chickpea Flour : 1/2 cup
                    </li>
                    <li className="Recipedet-list">
                      Ajwain / Carom Seeds : 1 tbsp or to taste
                    </li>
                    <li className="Recipedet-list">
                      Gram Flour / Chickpea Flour : 1/2 cup
                    </li>
                    <li className="Recipedet-list">
                      Crushed Black Pepper : 1 tbsp
                    </li>
                    <li className="Recipedet-list">Baking Soda : a</li>
                    <li className="Recipedet-list">
                      Turmeric Powder : 1/4 tsp
                    </li>
                    <li className="Recipedet-list">
                      Oil : 3 tbsp + as required for deep fry
                    </li>
                    <li className="Recipedet-list">Salt to taste</li>
                    <li className="Recipedet-list">
                      <li className="Recipedet-list">Water as required</li>
                    </li>
                  </ul>

                  <p className="Recipedet-sub-heading">
                    Ingredients for Jalebi :
                  </p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      All-Purpose Flour /Maida : 1 cup
                    </li>
                    <li className="Recipedet-list">
                      Cardamom Powder : 1/2 tsp
                    </li>
                    <li className="Recipedet-list">
                      Rapid Rise Yeast : 1 tsp (Regular yeast can be substituted
                    </li>
                    <li className="Recipedet-list">
                      but must be proofed in the warm water for 5-10 minutes,
                    </li>
                    <li className="Recipedet-list">
                      until foamy, before adding it to the flour)
                    </li>
                    <li className="Recipedet-list">Corn Starch : 2 tsp</li>
                    <li className="Recipedet-list">Yogurt /Curd : 1 tbsp</li>
                    <li className="Recipedet-list">Warm Water : 3/4 cup</li>
                    <li className="Recipedet-list">
                      <li className="Recipedet-list">Oil or Ghee : 1 tsp</li>
                    </li>
                    <li className="Recipedet-list">
                      Yellow Food Color : 1/2 pinch
                    </li>
                  </ul>

                  <p className="Recipedet-sub-heading">For Syrup :</p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">Sugar : 1 1/4 cups</li>
                    <li className="Recipedet-list">Water : 1 cup</li>
                    <li className="Recipedet-list">Saffron : pinch</li>
                    <li className="Recipedet-list">Lemon Juice : 1 tsp</li>
                    <li className="Recipedet-list">
                      Cardamom Powder : 1/4 tsp
                    </li>
                    <li className="Recipedet-list">
                      Rose water : few drops [optional]
                    </li>
                  </ul>

                  <p className="Recipedet-sub-heading">For Frying :</p>
                  <ul className="Recipedet-lists">
                    <li className="Recipedet-list">
                      Refined Oil + Ghee as needed
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}>
                  <div className="Recipeonedetail-flex-part">
                    <p className="Recipedet-sub-heading">How to make Fafda :</p>
                    <ul className="Recipedet-lists">
                      <li className="Recipedet-list">
                        1. In a bowl, add 2 tbsp oil, salt, turmeric powder,
                        crushed black pepper, ajwain seeds, and baking soda
                        together in a bowl and mix well.
                      </li>
                      <li className="Recipedet-list">
                        2. Add the gram flour/ chickpea flour, add water little
                        by little and make a soft dough just like chapatti
                        dough. Knead the dough at least for 5-6 minutes and add
                        1 tbsp oil; again knead the dough nicely and leave it
                        aside for 15 to 20 minutes covering with kitchen towel
                        or with a clingfilm.
                      </li>
                      <li className="Recipedet-list">
                        3. After 15 to 20 minutes; take a some portion of the
                        dough and give them oval shape and place it on a greased
                        surface.(Note : Take flat surface like chopping board
                        but not very smooth, it helps when you remove the fafda
                        from the board.)
                      </li>
                      <li className="Recipedet-list">
                        4. Take a oval dough ball; with base of your palm press
                        the dough and increase the length of ball with hands and
                        keep it on the board under your palm. Press it with the
                        palms and it in front direction. Roll out the thin layer
                        and cut out strips from it.
                      </li>
                      <li className="Recipedet-list">
                        5. Fry these strips over medium heat until crisp. Let
                        them cool.
                      </li>
                      <li className="Recipedet-list">
                        6. Now delicious fafda is ready to eat. Serve with spicy
                        green chilly chutney or chutney of grated papaya and
                        fried green chilly.
                      </li>
                    </ul>
                  </div>
                  <div className="Recipeonedetail-flex-part">
                    <p className="Recipedet-sub-heading">
                      How to make Jalebi :
                    </p>
                    <ul className="Recipedet-lists">
                      <li className="Recipedet-list">
                        1. In a large bowl, whisk together the flour, cornflour,
                        turmeric powder, and yogurt.
                      </li>
                      <li className="Recipedet-list">
                        2. Add the water and mix until a thick batter forms. The
                        batter should be thick enough to pour but thin enough to
                        flow.
                      </li>
                      <li className="Recipedet-list">
                        3. Add the baking soda and mix until combined.
                      </li>
                      <li className="Recipedet-list">
                        4. Cover the batter and let it rest for 30 minutes.
                      </li>
                      <li className="Recipedet-list">
                        5. Heat the oil or ghee in a deep pan over medium heat.
                      </li>
                      <li className="Recipedet-list">
                        6. Once the oil is hot, use a piping bag or a squeeze
                        bottle to pipe the batter into the hot oil.
                      </li>
                      <li className="Recipedet-list">
                        7. Fry the jalebi until golden brown on both sides.
                      </li>
                      <li className="Recipedet-list">
                        8. Remove the jalebi from the oil and drain on paper
                        towels.
                      </li>
                      <li className="Recipedet-list">
                        9. While the jalebi are still hot, soak them in the
                        sugar syrup for 1-2 minutes.
                      </li>
                      <li className="Recipedet-list">
                        10. Serve the jalebi hot or cold.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recfafdajalebi;
