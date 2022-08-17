import React from "react";
import "./style.css";

import parse from "html-react-parser";

//React Icon Imports
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
import { AiOutlineTags } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";

// Component Imports
import { CategoryView } from "../../micros/CategoryView/CategoryView";
import { TagView } from "../../micros/TagView/TagView";

export const DetailedMyCourseView = ({ course }) => {
  console.log(course);
  return (
    <div className='mdcv-container'>
      <div className='mdcv-top'>
        <div className='mdcv-top-left'>
          <div className='mdcv-image-container'>
            {!!course.card_image ? (
              <img
                className='mdcv-image'
                referrerPolicy='no-referrer'
                src={course.card_image}
                alt='image'
                loading='lazy'
              />
            ) : (
              <img
                className='mdcv-image'
                referrerPolicy='no-referrer'
                src='./img/gray_624x330.png'
                alt='image'
                loading='lazy'
              />
            )}
          </div>
          <div className='mdcv-enrollment'>
            <div className='mdcv-enrollment-item'>
              {course.is_enrolled ? (
                <>
                  <div>You enrolled this course</div>
                  <AiFillCheckSquare size={60} style={{ color: "#00cc00" }} />
                </>
              ) : (
                <>
                  <div>You didn't enroll this course</div>
                  <AiFillCloseSquare size={60} style={{ color: "#e60000" }} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className='mdcv-top-right'>
          <div>
            <h2 className='mdcv-title'> {course.title}</h2>
            <div>{parse(course.description)}</div>
            <h3 className='mdcv-h3'>
              <MdOutlineCategory /> Categories:
            </h3>
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
            <h3 className='mdcv-h3'>
              <AiOutlineTags /> Tags:
            </h3>
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
      </div>
      <div className='mdcv-bottom'>
        <div className='md:7/12 lg:w-6/12'>
          <h3 className='mdcv-h3'>
            Click{" "}
            <a href={course.link} className='mdcv-link'>
              here
            </a>{" "}
            to learn more about this course.
          </h3>
          <p className='price-text'>
            <GiPriceTag /> Price:{" "}
            <span className='price'>
              {course.price ? course.price : "00.00"} ₺
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
