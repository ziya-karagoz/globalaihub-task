import React, { useEffect, useState } from "react";
import "./style.css";

import axios from "axios";

// Component Imports
import { Button } from "../Button/Button";
import { CategoryView } from "../CategoryView/CategoryView";
import { TagView } from "../TagView/TagView";
import { MyCourseModal } from "../../Modal/MyCourseModal";

export const MyCourseView = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* Modal for my courses */}
      <MyCourseModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        course={course}
      >
        <p onClick={() => setIsModalOpen(false)}>{course?.title}</p>
      </MyCourseModal>
      {/* Single course box element */}
      <div className='mycourse-box'>
        <div onClick={() => setIsModalOpen(true)}>
          {course.card_image ? (
            <img
              className='card-image'
              referrerPolicy='no-referrer'
              src={course?.card_image}
              alt={course?.title}
            />
          ) : (
            <img className='card-image' src='./img/gray_624x330.png' />
          )}
          {/* Content displayer element */}
          <div className='content'>
            <h3>{course?.title}</h3>
            {course?.categories?.length > 0 ? (
              <div className='category-tab'>
                <div className='categories'>
                  {course?.categories?.map((category, idx) => {
                    return (
                      <CategoryView key={idx}>{category.name}</CategoryView>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className='empty-category'></div>
            )}
            <br />
            {course?.tags?.length > 0 ? (
              <div className='category-tab'>
                <div className='categories'>
                  {course?.tags?.map((tag, idx) => {
                    return <TagView key={idx}>{tag.name}</TagView>;
                  })}
                </div>
              </div>
            ) : (
              <div className='empty-category'></div>
            )}
          </div>
        </div>
        {/* Course box bottom element (contains course link anchor) */}
        <div className='mycourseview-bottom'>
          <div></div>
          <a href={course?.link} target='_blank'>
            <Button>Continue Course</Button>
          </a>
        </div>
      </div>
    </>
  );
};
