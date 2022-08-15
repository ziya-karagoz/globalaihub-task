import React from "react";
import "./style.css";
import { AiOutlineTags } from "react-icons/ai";
export const TagView = ({ children }) => {
  return (
    <button className='tag'>
      <AiOutlineTags size={16} />
      {children}
    </button>
  );
};
