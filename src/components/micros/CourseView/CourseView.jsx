import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
export const CourseView = ({ course }) => {
  useEffect(() => {
    console.log("CourseView: ", { course });
  }, [course]);

  return (
    <>
      <div className='course-box'>
        <div className='top'>
          {course.card_image ? (
            <img
              referrerPolicy='no-referrer'
              src={course?.card_image}
              alt={course?.title}
            />
          ) : (
            <div className='blank-image'></div>
          )}
        </div>
        <div className='middle'>
          <div className='title'>{course?.title}</div>
        </div>
        <div className='bottom'>
          <h5>asd</h5>
          <p>aciklama</p>
        </div>
      </div>
    </>
  );
};
