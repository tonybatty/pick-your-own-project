import React from "react";
import Cocktail from "./Cocktail";

import "../styles/components/recipies.scss";

function Favourites({ drinks, clickOnCocktail, clickOnFavourite, favourites }) {

  return (
    <div className="recipies">
      {favourites.map(favourite => (
        <Cocktail
          key={favourite.idDrink}
          drink={favourite}
          clickOnCocktail={clickOnCocktail}
          clickOnFavourite={clickOnFavourite}
          favourites={favourites}
          isFavourite={favourites.find(currentFavourite => {
            return currentFavourite.idDrink === favourite.idDrink;
          })}
        />
      ))}
    </div>
  );
}

export default Favourites;
