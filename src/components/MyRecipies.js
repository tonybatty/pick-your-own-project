import React from "react";
import MyCocktail from "./MyCocktail";

import "../styles/components/recipies.scss";

function MyRecipies({ drinks, clickOnCocktail, clickOnFavourite, favourites }) {
  const isFavourite = favourites.find(currentFavourite => {
    return currentFavourite.idDrink === drinks.idDrink;
  });

  return (
    <div className="recipies">
      {drinks.map(drink => (
        <MyCocktail
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

export default MyRecipies;
