import React from "react";

import "../styles/components/ingredient.scss";

function Ingredient({ ingredient, clickOnIngredient }) {
  return (
    <div
      className="ingredient"
      id={ingredient.strIngredient1}
      onClick={event => clickOnIngredient(ingredient.strIngredient1)}
    >
      <img className="ingredient__image" src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}.png`} />
      <div className="ingredient__info">
        <h2 className={"ingredient__info__name"}>{ingredient.strIngredient1}</h2>
      </div>
      <div className="ingredient__fav" />
    </div>
  );
}

export default Ingredient;