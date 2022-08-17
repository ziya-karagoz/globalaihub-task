import React, { useState, useRef } from "react";
import "./style.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { HiOutlineMicrophone } from "react-icons/hi";
export const SearchBar = ({ placeholder, passKeywords }) => {
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
          placeholder='Search Course...'
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
