import React from "react";
import Cocktail from "./Cocktail";
import Ingredient from "./ingredient";

import "../styles/components/recipies.scss";

function MyBar({ ingredients, clickOnCocktail, clickOnFavourite, myBar, addToMyBar }) {

  return (
    <div className="recipies">
      {ingredients.map(ingredient => (
        <Ingredient
          key={ingredient.idDrink}
          ingredient={ingredient}
          clickOnCocktail={clickOnCocktail}
          clickOnFavourite={clickOnFavourite}
          myBar={myBar}
          addToMyBar={addToMyBar}
          isFavourite={myBar.find(currentFavourite => {
            return currentFavourite === ingredient.strIngredient1;
          })}
        />
      ))}
    </div>
  );
}

export default MyBar;
