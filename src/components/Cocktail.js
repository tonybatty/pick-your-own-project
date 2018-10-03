import React from "react";

import "../styles/components/cocktail.scss";

function Cocktail({ drink, clickOnCocktail }) {
  // console.log(drink);
  return (
    <div
      className="cocktail"
      id="drink.idDrink"
      onClick={event => clickOnCocktail(drink.idDrink)}
    >
      <img className="cocktail__image" src={drink.strDrinkThumb} />
      <div className="cocktail__info">
        <h2 className={"cocktail__info__name"}>{drink.strDrink}</h2>
        <h3 className="cocktail__info__ingredients">{drink.strIngredient1}</h3>
      </div>
      <div className="cocktail__fav" />
    </div>
  );
}

export default Cocktail;
