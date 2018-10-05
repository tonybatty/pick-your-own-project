import React from "react";

import "../styles/components/cocktail.scss";

function MyCocktail({
  drink,
  clickOnCocktail,
  clickOnFavourite,
  favourites,
  isFavourite
}) {
  const ingredientArr = [];

  const details = getDetails(drink);

  function getDetails() {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`
    )
      .then(response => response.json())
      .then(result => {   console.log("00" + result.drinks[0].idDrink); result.drinks});
  }

  for (let i = 0; i < 16; i++) {
    let ingredient = drink[`strIngredient${i + 1}`];

    if (
      ingredient !== "" &&
      ingredient !== " " &&
      ingredient !== "/n" &&
      ingredient !== null &&
      ingredient !== undefined
    ) {
      ingredientArr[i] = ingredient;
    }
  }



  return (
    <div className="cocktail" id="drink.idDrink">
      <img
        className="cocktail__image"
        src={drink.strDrinkThumb}
        onClick={event => clickOnCocktail(drink.idDrink)}
      />
      <div
        className="cocktail__info"
        onClick={event => clickOnCocktail(drink.idDrink)}
      >
        <h2 className={"cocktail__info__name"}>{drink.strDrink}</h2>
        {/* <h3 className="cocktail__info__ingredients">{drink.strIngredient1}</h3> */}

        <p className="cocktail__info__ingredient">{ingredientArr.join(", ")}</p>
      </div>
      <div
        className="cocktail__fav"
        onClick={event =>
          clickOnFavourite(drink, isFavourite === drink.idDrink)
        }
      >
        <img
          className="cocktail__fav__image"
          src={
            isFavourite !== undefined
              ? "src/images/fav.png"
              : "src/images/favAdd.png"
          }
          onClick={event => clickOnFavourite(drink.idDrink)}
        />
      </div>
    </div>
  );
}

export default MyCocktail;
