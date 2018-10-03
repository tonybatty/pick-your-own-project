import React from "react";
import Cocktail from "./Cocktail";

import "../styles/components/recipies.scss";

function Recipies({ drinks, clickOnCocktail }) {
  return (
    <div className="recipies">
      {drinks.map(drink => (
        <Cocktail
          key={drink.idDrink}
          drink={drink}
          clickOnCocktail={clickOnCocktail}
        />
      ))}
    </div>
  );
}

export default Recipies;