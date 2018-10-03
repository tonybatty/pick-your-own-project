import React from "react";

import "../styles/components/search.scss";

function Search({ query, handleChange, submitSearch }) {
  return (
    <form
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
  );
}

export default Search;
