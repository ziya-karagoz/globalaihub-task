import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

import { Button } from "../Button/Button";
import { CategoryView } from "../CategoryView/CategoryView";
export const CourseView = ({ course }) => {
  useEffect(() => {
    console.log("CourseView: ", { course });
  }, [course]);

  return (
    <>
      <div className='course-box'>
        {course.card_image ? (
          <img
            referrerPolicy='no-referrer'
            src={course?.card_image}
            alt={course?.title}
          />
        ) : (
          <div className='blank-img'></div>
        )}
        <div className='content'>
          <h3>{course?.title}</h3>
          {course?.categories?.length > 0 ? (
            <div className='category-tab'>
              <h4>Categories:</h4>
              <div className='categories'>
                {course?.categories?.map((category, idx) => {
                  return <CategoryView key={idx}>{category.name}</CategoryView>;
                })}
              </div>
            </div>
          ) : null}
          {course?.tags?.length > 0 ? (
            <div className='category-tab'>
              <h4>Tags:</h4>
              <div className='categories'>
                {course?.tags?.map((tag, idx) => {
                  return <CategoryView key={idx}>{tag.name}</CategoryView>;
                })}
              </div>
            </div>
          ) : null}
        </div>
        <div className='bottom'>
          <div></div>
          <a href={course?.link}>
            <Button>Continue Course</Button>
          </a>
        </div>
      </div>
    </>
  );
};
