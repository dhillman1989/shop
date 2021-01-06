import "./styles/css/search.css";

function Search() {
  return (
    <div className="search">
      <form>
        <input className="search__input" id="query" name="query" required />
        <button className="search__btn">Search</button>
      </form>
    </div>
  );
}

export default Search;
