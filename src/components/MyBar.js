import React from "react";
import Ingredient from "./Ingredient";

import "../styles/components/recipies.scss";

function MyBar({ ingredients, clickOnIngredient }) {

  return (
    <div className="my-bar">
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          clickOnIngredient={clickOnIngredient}
        />
      ))}
    </div>
  );
}

export default MyBar;