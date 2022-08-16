import React from "react";
import "./style.css";
export const Button = ({ handleOnClick, children }) => {
  return (
    <button className='common-btn' onClick={handleOnClick}>
      {children}
    </button>
  );
};
