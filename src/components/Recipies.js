import React from "react";
import Cocktail from "./Cocktail";

import "../styles/components/recipies.scss";

function Recipies({ drinks, clickOnCocktail, clickOnFavourite, favourites }) {
  const isFavourite = favourites.find(currentFavourite => {
    return currentFavourite.idDrink === drinks.idDrink;
  });

  return (
    <div className="recipies">
      {drinks.map(drink => (
        <Cocktail
          key={drink.idDrink}
          drink={drink}
          clickOnCocktail={clickOnCocktail}
          clickOnFavourite={clickOnFavourite}
          favourites={favourites}
          isFavourite={favourites.find(currentFavourite => {
            return currentFavourite.idDrink === drink.idDrink;
          })}
        />
      ))}
    </div>
  );
}

export default Recipies;
