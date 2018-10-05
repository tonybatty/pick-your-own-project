import React from "react";
import Search from "./Search";
import Recipies from "./Recipies";
import Details from "./Details";
import MyBar from "./MyBar";
import Favourites from "./Favourites";
import MyRecipies from "./MyRecipies";

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
      favourites: [],
      myBar: [],
      renderDetails: false,
      renderRecipies: false,
      renderMyRecipies: false,
      renderMyBar: false,
      renderFavourites: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.getMyDrinks = this.getMyDrinks.bind(this);
    this.clickOnCocktail = this.clickOnCocktail.bind(this);
    this.clickRecipies = this.clickRecipies.bind(this);
    this.clickMyBar = this.clickMyBar.bind(this);
    this.clickMyFavourites = this.clickMyFavourites.bind(this);
    this.clickOnIngredient = this.clickOnIngredient.bind(this);
    this.clickOnFavourite = this.clickOnFavourite.bind(this);
    this.addToMyBar = this.addToMyBar.bind(this);
  }

  componentDidMount() {
    const favourites = window.localStorage.getItem("favourites");
    const favouritesArray = favourites ? JSON.parse(favourites) : [];

    this.setState({
      favourites: favouritesArray
    });

    const myBar = window.localStorage.getItem("myBar");
    const myBarArray = myBar ? JSON.parse(myBar) : [];

    this.setState({
      myBar: myBarArray
    });
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
      renderFavourites: false,
      renderMyRecipies: false
    });
    this.getMyDrinks();
  }

  clickMyBar() {
    console.log("my bar");
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
      .then(response => response.json())
      .then(result => {
        this.setState(
          {
            ingredients: result.drinks,
            renderDetails: false,
            renderRecipies: false,
            renderMyBar: true,
            renderFavourites: false,
            renderMyRecipies: false
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
      renderFavourites: true,
      renderMyRecipies: false
    });
  }

  clickOnFavourite(drink, isFavourite) {
    if (isFavourite === true) {
      const newFavourites = this.state.favourites.filter(
        favourite => drink.idDrink !== favourite.idDrink
      );
      this.setState({ favourites: newFavourites });
      localStorage.favourites = JSON.stringify(newFavourites);
    } else if (isFavourite === false) {
      const newFavourites = this.state.favourites.concat(drink);
      this.setState({ favourites: newFavourites });
      localStorage.favourites = JSON.stringify(newFavourites);
    }
  }

  addToMyBar(ingredient, isFavourite) {
    const newMyBar = this.state.myBar.concat(ingredient.strIngredient1);
    this.setState({ myBar: newMyBar });
    localStorage.myBar = JSON.stringify(newMyBar);
  }

  clickOnCocktail(id) {
    console.log(id);
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then(response => response.json())
      .then(result => {
        this.setState(
          {
            details: result.drinks[0],
            renderDetails: true,
            renderRecipies: false,
            renderMyBar: false,
            renderFavourites: false,
            renderMyRecipies: false
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
            renderRecipies: true,
            renderMyBar: false,
            renderFavourites: false,
            renderMyRecipies: false
          },
          () => console.log(result)
        );
      });
  }

  getMyDrinks() {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.myBar[0]}`
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState(
          {
            drinks: result.drinks,
            renderDetails: false,
            renderRecipies: false,
            renderMyBar: false,
            renderFavourites: false,
            renderMyRecipies: true
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
            clickOnFavourite={this.clickOnFavourite}
            favourites={this.state.favourites}
          />
        ) : null}
                {this.state.renderMyRecipies ? (
          <MyRecipies
            className="recipies"
            drinks={this.state.drinks}
            clickOnCocktail={this.clickOnCocktail}
            clickOnFavourite={this.clickOnFavourite}
            favourites={this.state.favourites}
          />
        ) : null}
        {this.state.renderMyBar ? (
          <MyBar
            className="my-bar"
            ingredients={this.state.ingredients}
            clickOnCocktail={this.clickOnCocktail}
            clickOnFavourite={this.clickOnFavourite}
            myBar={this.state.myBar}
            addToMyBar={this.addToMyBar}
          />
        ) : null}
        {this.state.renderFavourites ? (
          <Favourites
            className="recipies"
            favourites={this.state.favourites}
            clickOnCocktail={this.clickOnCocktail}
            clickOnFavourite={this.clickOnFavourite}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
