import React, { useState } from "react";

import "./styles/css/search.css";

function Search({ setFilter }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilter(e);
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
        <button className="search__btn">Search</button>
      </form>
    </div>
  );
}

export default Search;
