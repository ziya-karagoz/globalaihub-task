import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

import { Button } from "../Button/Button";
import { CategoryView } from "../CategoryView/CategoryView";
import { TagView } from "../TagView/TagView";
export const CourseView = ({ course }) => {
  const [shouldShowModal, setshouldShowModal] = useState(false);

  useEffect(() => {
    console.log("CourseView: ", { course });
  }, [course]);

  const handleModalPopup = () => {
    setshouldShowModal(true);
    console.log("deneme");
  };

  return (
    <>
      <div className='course-box' onClick={handleModalPopup}>
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
              <div className='categories'>
                {course?.categories?.map((category, idx) => {
                  return <CategoryView key={idx}>{category.name}</CategoryView>;
                })}
              </div>
            </div>
          ) : null}
          <br />
          {course?.tags?.length > 0 ? (
            <div className='category-tab'>
              <div className='categories'>
                {course?.tags?.map((tag, idx) => {
                  return <TagView key={idx}>{tag.name}</TagView>;
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
