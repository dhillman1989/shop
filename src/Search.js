import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles/css/search.css";

function Search({ history, setFilter }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="search">
      <button onClick={() => history.goBack()}>Go back</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilter(searchQuery);
          history.push(`/search/${searchQuery}`);
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

export default withRouter(Search);
