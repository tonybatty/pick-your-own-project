import React from "react";
import Search from "./Search";
import Recipies from "./Recipies";
import Details from "./Details";

import "../styles/components/app.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
      query: "",
      renderDetails: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.clickOnCocktail = this.clickOnCocktail.bind(this);
    this.navClick = this.navClick.bind(this);
  }

  handleChange(query) {
    console.log(query);
    this.setState({ query });
  }

  navClick() {
    
  }

  clickOnCocktail(query) {
    console.log(query)
  }

  submitSearch(query) {
    console.log(query);
    console.log(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    );
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({ drinks: result.drinks }, () => console.log(result));
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
            />
          </div>
          <div className="header__nav-bar">
            {/* <Nav
              className="nav"
              onClick={this.navClick}
            /> */}
          </div>
        </header>
        {this.state.renderDetails ? <Details /> : null}
        <Recipies className="recipies" drinks={this.state.drinks} clickOnCocktail={this.clickOnCocktail} />
      </main>
    );
  }
}

export default App;
