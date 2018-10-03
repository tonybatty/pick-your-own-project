import React from 'react'

import '../styles/components/details.scss'

function Details({}) {
    return(
        <div className="details">
            <img className="details__image" src="https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"/>
            <h1 className="details__name">Margarita</h1>
            <h2 className="details__instrutions">Instructions</h2>
            <p className="details__instructions-text">Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.</p>
            <h2 className="details__ingredients">Ingredients</h2>
            <ul className="details__ingredients-text">
                <li>Tequila</li>
                <li>Triple sec</li>
                <li>Lime juice</li>
                <li>Salt</li>
            </ul>

        </div>
    )
}

export default Details;