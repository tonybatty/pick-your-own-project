import React from "react";
import Search from "./Search";
import Cocktails from "./Cocktails";
import Details from "./Details";

import "../styles/components/app.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
      query: "",
      renderDetails: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.clickOnCocktail = this.clickOnCocktail.bind(this);
  }

  handleChange(query) {
    console.log(query);
    this.setState({ query });
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
          <div className="nav">
            <Search
              className="search"
              query={this.state.query}
              handleChange={this.handleChange}
              submitSearch={this.submitSearch}
            />
          </div>
        </header>
        {this.state.renderDetails ? <Details /> : null}
        <Cocktails className="cocktails" drinks={this.state.drinks} clickOnCocktail={this.clickOnCocktail} />
      </main>
    );
  }
}

export default App;
