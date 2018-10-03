import React from "react";
import Cocktail from "./Cocktail";

import "../styles/components/cocktails.scss";

function Cocktails({ drinks, clickOnCocktail }) {
  return (
    <div className="cocktails">
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

export default Cocktails;