import React from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
export const SearchBar = ({ passKeywords }) => {
  return (
    <form className='search-form'>
      <label htmlFor='default-search' className='search-bar-label'>
        Search
      </label>
      <div className='search-container'>
        <div className='search-icon'>
          <AiOutlineSearch size={20} style={{ color: "gray" }} />
        </div>
        <input
          type='search'
          id='default-search'
          className='search-input'
          placeholder='Search courses by name...'
          required
          onChange={(e) => passKeywords(e.target.value)}
        />
        <button
          type='submit'
          className='search-btn'
          onClick={(e) => e.preventDefault()}
        >
          Search
        </button>
      </div>
    </form>
  );
};
