import React from "react";
import "./style.css";

import parse from "html-react-parser";

//React Icon Imports
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
import { AiOutlineTags } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";

// Component Imports
import { CategoryView } from "../CategoryView/CategoryView";
import { TagView } from "../TagView/TagView";

export const DetailedMyCourseView = ({ course }) => {
  console.log(course);
  return (
    <div className='dcv-container'>
      <div className='dcv-top'>
        <div className='dcv-top-left'>
          <div className='dcv-image-container'>
            {!!course.card_image ? (
              <img
                className='dcv-image'
                referrerPolicy='no-referrer'
                src={course.card_image}
                alt='image'
                loading='lazy'
              />
            ) : (
              <img
                className='dcv-image'
                referrerPolicy='no-referrer'
                src='./img/gray_624x330.png'
                alt='image'
                loading='lazy'
              />
            )}
          </div>
          <div className='dcv-enrollment'>
            <div className='dcv-enrollment-item'>
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
        <div className='dcv-top-right'>
          <div>
            <h2 className='dcv-title'> {course.title}</h2>
            <div>{parse(course.description)}</div>
            <h3 className='dcv-h3'>
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
            <h3 className='dcv-h3'>
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
      <div className='dcv-bottom'>
        <div className='md:7/12 lg:w-6/12'>
          <h3 className='dcv-h3'>
            Click{" "}
            <a href={course.link} className='dcv-link'>
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
