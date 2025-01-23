import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../../utils/api";
import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search-icon.svg";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const isMounted = true;
  const authToken = localStorage.getItem("authToken");

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      setError("");
      return;
    }

    try {
      const response = await axios.get(`${baseURL}/users/search`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        params: { query: searchQuery },
      });
      if (isMounted) {
        setSearchResults(response.data);
        setError("");
      }
    } catch (err) {
      if (isMounted) {
        setSearchResults([]);
        setError("No users found");
      }
    }
  };

  return (
    <section className="search">
      <div className="search__bar">
        <input
          type="text"
          className={`search__input ${
            searchResults.length > 0 ? "search__input-results" : ""
          }`}
          placeholder="Find friends..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <img src={searchIcon} alt="magnifying glass" className="search__icon" />
      </div>

      {error && <p className="search__error">{error}</p>}
      {searchResults.length > 0 && (
        <div className="search__container">
          <ul className="search__results">
            {searchResults.map((user) => (
              <li key={user.id} className="search__results-item">
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default SearchBar;
