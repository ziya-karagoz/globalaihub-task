import React from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id='background'></div>
      <div className='error-top'>
        <h1 className='error-h1'>404</h1>
        <h3 className='error-h3'>page not found</h3>
      </div>
      <div className='error-bottom'>
        <div className='error-buttons'>
          <button className='error-btn' onClick={() => navigate(-1)}>
            Back
          </button>
          <a href='https://globalaihub.com/'>
            <button className='error-btn'>Home</button>
          </a>
        </div>
      </div>
    </div>
  );
};
