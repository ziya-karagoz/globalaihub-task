import React, { useEffect, useState } from "react";
import "./style.css";
import parse from "html-react-parser";
// Component Imports
import { CategoryView } from "../CategoryView/CategoryView";
import { Button } from "../Button/Button";

// Custom Hook Imports
import { useCourseMediaData } from "../../../hooks/useCourseMediaData";
import { useCourseCategoriesData } from "../../../hooks/useCourseCategoriesData";
import { useCourseAuthorData } from "../../../hooks/useCourseAuthorData";

export const CourseView = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mediaUrl = course._links["wp:featuredmedia"][0].href;
  const categoryUrl = course._links["wp:term"][0].href;
  const authorUrl = course._links.author[0].href;

  // Custom Hook Calls
  const {
    data: mediaData,
    isError: mediaisError,
    isLoading: mediaIsLoading,
  } = useCourseMediaData(mediaUrl);
  const {
    data: categoryData,
    isLoading: categoryIsLoading,
    isError: categoryIsError,
  } = useCourseCategoriesData(categoryUrl);
  const {
    data: authorData,
    isLoading: authorIsLoading,
    isError: authorIsError,
  } = useCourseAuthorData(authorUrl);

  return (
    <>
      <div className='course-box'>
        <div onClick={() => setIsModalOpen(true)}>
          {mediaData?.data.guid.rendered ? (
            <img
              className='card-image'
              referrerPolicy='no-referrer'
              src={mediaData?.data.guid.rendered}
              alt=''
            />
          ) : (
            <img className='card-image' src='./img/gray_624x330.png' />
          )}
          <div className='content'>
            <h3>{parse(course?.title.rendered)}</h3>
            {categoryData?.data.length > 0 ? (
              <div className='category-tab'>
                <div className='categories'>
                  {categoryData?.data.map((category, idx) => {
                    return (
                      <CategoryView key={idx}>{category.name}</CategoryView>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className='empty-category'></div>
            )}
          </div>
        </div>
        <div className='courseview-bottom'>
          <div></div>
          <a href={course?.link} target='_blank'>
            <Button>Continue Course</Button>
          </a>
        </div>
      </div>
    </>
  );
};
