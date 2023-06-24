import React from 'react';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button>
        <FiSearch />
      </button>
      <button className="animate">
        <FiArrowRight />
      </button>
    </div>
  );
};

export default SearchBar;
