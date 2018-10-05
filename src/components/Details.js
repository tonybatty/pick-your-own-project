import React from "react";

import "../styles/components/details.scss";

function Details({ details }) {
  const measureArr = [];
  const ingredientArr = [];

  for (let i = 0; i < 16; i++) {
    let measure = details[`strMeasure${i + 1}`];
    let ingredient = details[`strIngredient${i + 1}`];

    if (
      measure !== "" &&
      measure !== " " &&
      measure !== "/n" &&
      measure !== undefined
    ) {
      measureArr[i] = measure;
    }
    if (
      ingredient !== "" &&
      ingredient !== " " &&
      ingredient !== "/n" &&
      ingredient !== undefined
    ) {
      ingredientArr[i] = ingredient;
    }
  }

  return (
    <div className="details" id={details.idDrink}>
      <img className="details__image" src={details.strDrinkThumb} />
      <h1 className="details__name">{details.strDrink}</h1>
      <h2 className="details__instructions">Instructions</h2>
      <p className="details__instructions-text">{details.strInstructions}</p>
      <h2 className="details__ingredients">Ingredients</h2>
      <ul className="details__measure">
        {measureArr.map((measure, index) => (
          <li key={index} id={measure}>{measure}</li>
        ))}
      </ul>
      <ul className="details__ingredient">
        {ingredientArr.map((ingredient, index) => (
          <li key={index} id={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
