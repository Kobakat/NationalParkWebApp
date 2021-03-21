import "./search-bar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <form className="search-form" action="">
        <input type="text" placeholder="Search..." />
        <select name="" id="">
          <option value="">State</option>
          <option value="">Topics</option>
          <option value="">Designation</option>
          <option value="">Activities</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
