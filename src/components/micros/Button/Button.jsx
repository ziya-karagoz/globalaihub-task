import React from "react";
import "./style.css";
export const Button = ({ handleOnClick, children }) => {
  return (
    <button className='btn' onClick={handleOnClick}>
      {children}
    </button>
  );
};
