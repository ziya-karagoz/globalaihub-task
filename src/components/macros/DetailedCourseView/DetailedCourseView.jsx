import React from "react";
import "./style.css";
import parse from "html-react-parser";
import { formatHTMLImages } from "../../../utils/formatter";

//React Icon Imports
import { MdOutlineCategory } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";

// Component Imports
import { CategoryView } from "../../micros/CategoryView/CategoryView";
import { AuthorView } from "../../micros/AuthorView/AuthorView";

export const DetailedCourseView = ({
  course,
  mediaData,
  categoryData,
  authorData,
}) => {
  return (
    <div className='dcv-container'>
      <div className='dcv-top'>
        <div className='dcv-front-infos'>
          {mediaData.guid.rendered ? (
            <img
              className='dcv-image'
              referrerPolicy='no-referrer'
              src={mediaData.guid.rendered}
              alt=''
              loading='lazy'
            />
          ) : (
            <img
              className='dcv-image'
              referrerPolicy='no-referrer'
              src='./img/gray_624x330.png'
              alt=''
              loading='lazy'
            />
          )}
          <h1 className='dcv-h1'>{parse(course?.title.rendered)}</h1>
          <br />
          <p className='price-text'>
            <GiPriceTag /> Price:{" "}
            <span className='price'>{course.price_type} ₺</span>
          </p>
          <div>
            {categoryData.length > 0 ? (
              <>
                <h3 className='dcv-h3'>
                  <MdOutlineCategory /> Categories:
                </h3>
                <div className='category-tab'>
                  <div className='categories'>
                    {categoryData.map((category, idx) => {
                      return (
                        <CategoryView key={idx}>{category.name}</CategoryView>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>

        <AuthorView
          photo={authorData?.avatar_urls["96"]}
          name={authorData?.name}
          website={authorData?.url}
          authorDescription={authorData?.description}
        />
      </div>
      <div>
        <div className='dcv-course-content'>
          {parse(formatHTMLImages(course?.content.rendered))}
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
        </div>
      </div>
    </div>
  );
};
