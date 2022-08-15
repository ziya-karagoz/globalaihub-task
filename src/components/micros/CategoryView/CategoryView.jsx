import React from "react";
import "./style.css";

import { MdOutlineCategory } from "react-icons/md";
export const CategoryView = ({ children }) => {
  return (
    <button className='category'>
      <MdOutlineCategory size={16} />
      {children}
    </button>
  );
};
