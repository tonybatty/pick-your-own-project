import React from "react";

import "../styles/components/search.scss";

function Search({ query, handleChange, submitSearch }) {
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
        <p className="nav__my-bar">My Bar</p>
        <p className="nav__recipies">Recipies</p>
        <p className="nav__favourites">Favourites</p>
      </div>
    </div>
  );
}

export default Search;
