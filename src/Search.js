import React, { useState } from "react";

import "./styles/css/search.css";

function Search({ setFilter }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilter(searchQuery);
        }}
      >
        <input
          className="search__input"
          id="query"
          name="query"
          required
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search__btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
