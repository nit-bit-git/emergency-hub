import React from 'react';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

function SearchBar ()  {
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
