import "./SearchBar.scss"
import searchIcon from "../../assets/icons/search-icon.svg"

function SearchBar () {
    return(
        <div className="search">
            <input type="text" className="search__input" placeholder="Find friends..." />
            <img src={searchIcon} alt="magnifying glass" className="search__icon" />
        </div>
    )
};

export default SearchBar;
