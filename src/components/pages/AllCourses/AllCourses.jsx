import React, { useEffect, useState } from "react";
import "./style.css";
import Select from "react-select";

import { categoryOptions, tagOptions } from "../../../utils/constants";
// Component Imports
import { CourseView } from "../../micros/CourseView/CourseView";
import { SearchBar } from "../../micros/SearchBar/SearchBar";

// Custom Hook Imports
import { useAllCoursesData } from "../../../hooks/useAllCoursesData";

export const AllCourses = () => {
  const [searchKeywords, setSearchKeywords] = useState(null);

  // React Query On Success Handler
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  // React Query On Error Handler
  const onError = (err) => {
    console.log("Perform side effect after encountering error", err);
  };

  // Custom Hook for fetching all courses data
  const { data, isError, isLoading } = useAllCoursesData(onSuccess, onError);

  useEffect(() => {
    console.log(searchKeywords);
  }, [searchKeywords]);

  return (
    <>
      <div className='courses-container'>
        <div className='search-elements'>
          <SearchBar
            placeholder={"Search courses by name..."}
            passKeywords={setSearchKeywords}
          />
          <div className='category-tag'>
            <div className='category-select'>
              <Select
                placeholder='Category...'
                isClearable
                options={categoryOptions}
              />
            </div>
            <div className='tag-select'>
              <Select placeholder='Tag...' isClearable options={tagOptions} />
            </div>
          </div>
        </div>
        <div className='header'>
          <h2>
            All Courses
            <hr />
          </h2>
        </div>
        <div className='grid-view'>
          {data?.data.map((course, idx) => {
            return <CourseView course={course} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};
