import React from "react";

import "../styles/components/search.scss";

function Search({ query, handleChange, submitSearch, clickRecipies, clickMyBar, clickMyFavourites }) {
  return (
    <div className="search">
      <form className="search__form"
        onSubmit={event => {
          event.preventDefault();
          submitSearch(query);
        }}
      >
        <label htmlFor="cocktail-search" />
        <input
          className="search__input"
          type="text"
          onChange={event => handleChange(event.target.value)}
          value={query}
        />
      </form>
      <div className="nav">
        <div className="nav__recipies" onClick={event => clickRecipies()}><p>Recipies</p></div>
        <div className="nav__my-bar" onClick={event => clickMyBar()}><p>My Bar</p></div>
        <div className="nav__favourites" onClick={event => clickMyFavourites()}><p>Favourites</p></div>
      </div>
    </div>
  );
}

export default Search;
