import React from "react";
import "./style.css";
export const AuthorView = ({ photo, name, website, authorDescription }) => {
  return (
    <>
      <div className='card-container'>
        <span className='pro'>PRO</span>
        <img
          referrerPolicy='no-referrer'
          className='round'
          src={photo}
          alt='user'
        />
        <h3 className='author-header'>{name}</h3>
        <a
          href={website}
          target='_blank'
          style={{
            textDecoration: "none",
          }}
        >
          <h6 className='author-link'>Author Website</h6>
        </a>
        <p className='author-description'>{authorDescription}</p>
      </div>
    </>
  );
};
