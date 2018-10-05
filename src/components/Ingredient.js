import React from "react";

import "../styles/components/cocktail.scss";

function Ingredient({
  ingredient,
  clickOnIngredient,
  drink,
  clickOnCocktail,
  addToMyBar,
  myBar,
  isFavourite
}) {
  return (
    <div className="cocktail" id="drink.strIngredient1">
      <img
        className="cocktail__image"
        src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}.png`}
        onClick={event => clickOnCocktail(ingredient.strIngredient1)}
      />
      <div
        className="cocktail__info"
        onClick={event => clickOnCocktail(ingredient.idDrink)}
      >
        <h4 className={"ingredient_name"}>{ingredient.strIngredient1}</h4>
  

      </div>
      <div
        className="cocktail__fav"
        onClick={event =>
          addToMyBar(ingredient, isFavourite === ingredient.strIngredient1)
        }
      >
        <img
          className="cocktail__fav__image"
          src={
            isFavourite !== undefined
              ? "src/images/remove.png"
              : "src/images/add.png"
          }
          onClick={event => addToMyBar(ingredient.strIngredient1)}
        />
      </div>
    </div>
  );
}

export default Ingredient;
