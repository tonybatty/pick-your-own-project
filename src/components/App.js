import React from "react";
import Search from "./Search";
import Recipies from "./Recipies";
import Details from "./Details";
import MyBar from "./MyBar";

import "../styles/components/app.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      drinks: [],
      id: "",
      details: [],
      ingredients: [],
      renderDetails: false,
      renderRecipies: false,
      renderMyBar: false,
      renderFavourites: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.clickOnCocktail = this.clickOnCocktail.bind(this);
    this.clickRecipies = this.clickRecipies.bind(this);
    this.clickMyBar = this.clickMyBar.bind(this);
    this.clickMyFavourites = this.clickMyFavourites.bind(this);
    this.clickOnIngredient = this.clickOnIngredient.bind(this);
  }

  handleChange(query) {
    this.setState({ query });
  }

  clickRecipies() {
    console.log("recipies");
    this.setState({
      renderDetails: false,
      renderRecipies: true,
      renderMyBar: false,
      renderFavourites: false
    });
  }

  clickMyBar() {
    console.log("my bar");
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
    )
      .then(response => response.json())
      .then(result => {
        this.setState(
          {
            ingredients: result.drinks,
            renderDetails: false,
            renderRecipies: false,
            renderMyBar: true,
            renderFavourites: false
          },
          () => console.log(result)
        );
      });

  }

  clickMyFavourites() {
    console.log("favourites");
    this.setState({
      renderDetails: false,
      renderRecipies: false,
      renderMyBar: false,
      renderFavourites: true
    });
  }

  clickOnCocktail(id) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then(response => response.json())
      .then(result => {
        this.setState(
          {
            details: result.drinks[0],
            renderDetails: true,
            renderRecipies: false
          },
          () => console.log(result)
        );
      });
  }

  clickOnIngredient(ingredient) {
    console.log(ingredient);
  }

  submitSearch(query) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState(
          {
            query: "",
            drinks: result.drinks,
            renderDetails: false,
            renderRecipies: true
          },
          () => console.log(result)
        );
      });
  }

  render() {
    return (
      <main>
        <header className="header">
          <div className="header__search-bar">
            <Search
              query={this.state.query}
              handleChange={this.handleChange}
              submitSearch={this.submitSearch}
              clickRecipies={this.clickRecipies}
              clickMyBar={this.clickMyBar}
              clickMyFavourites={this.clickMyFavourites}
            />
          </div>
          <div className="header__nav-bar">
            {/* <Nav
              className="nav"
              onClick={this.navClick}
            /> */}
          </div>
        </header>
        {this.state.renderDetails ? (
          <Details details={this.state.details} />
        ) : null}
        {this.state.renderRecipies ? (
          <Recipies
            className="recipies"
            drinks={this.state.drinks}
            clickOnCocktail={this.clickOnCocktail}
          />
        ) : null}
        {this.state.renderMyBar ? (
          <MyBar
            className="my-bar"
            ingredients={this.state.ingredients}
            clickOnIngredient={this.clickOnIngredient}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
