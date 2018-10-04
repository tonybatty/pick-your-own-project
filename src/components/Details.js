import React from "react";

import "../styles/components/details.scss";

function Details({ details }) {
  function generateList() {
    function getvalue() {}

    details[`strMeasure${i}`];

    let ingredientsList = "";
    let measure = "";
    let ingredient = "";
    for (let i = 1; i < 15; i++) {
      measure = details[`strMeasure${i}`];
      console.log(measure);
      ingredient = details[`strIngredient${i}`];
      console.log(ingredient);
      ingredientsList += (
        <li>
          `$
          {measure}`
        </li>
      );
      console.log(ingredientsList);
    }
    return ingredientsList;
  }

  return (
    <div className="details" id={details.idDrink}>
      <img className="details__image" src={details.strDrinkThumb} />
      <h1 className="details__name">{details.strDrink}</h1>
      <h2 className="details__instructions">Instructions</h2>
      <p className="details__instructions-text">{details.strInstructions}</p>
      <h2 className="details__ingredients">Ingredients</h2>
      <ul className="details__ingredients-text">
        {generateList}
        <li id={details.strIngredient1}>
          {details.strMeasure1} {details.strIngredient1}
        </li>
        <li id={details.strIngredient2}>
          {details.strMeasure2} {details.strIngredient2}
        </li>
        <li id={details.strIngredient3}>
          {details.strMeasure3} {details.strIngredient3}
        </li>
        <li id={details.strIngredient4}>
          {details.strMeasure4} {details.strIngredient4}
        </li>
        <li id={details.strIngredient5}>
          {details.strMeasure5} {details.strIngredient5}
        </li>
        <li id={details.strIngredient6}>
          {details.strMeasure6} {details.strIngredient6}
        </li>
        <li id={details.strIngredient7}>
          {details.strMeasure7} {details.strIngredient7}
        </li>
        <li id={details.strIngredient8}>
          {details.strMeasure8} {details.strIngredient8}
        </li>
      </ul>
    </div>
  );
}

export default Details;
