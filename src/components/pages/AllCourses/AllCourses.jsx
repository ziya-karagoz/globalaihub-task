import React, { useEffect, useState } from "react";
import "./style.css";
import Select from "react-select";

import { categoryOptions, tagOptions } from "../../../utils/constants";
// Component Imports
import { CourseView } from "../../macros/CourseView/CourseView";
import { SearchBar } from "../../micros/SearchBar/SearchBar";

// Custom Hook Imports
import { useAllCoursesData } from "../../../hooks/useAllCoursesData";
import { LoadingView } from "../../micros/LoadingView/LoadingView";

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
  const { data, isError, isLoading } = useAllCoursesData(onSuccess, onError, {
    searchKeywords,
  });

  if (isLoading) {
    return (
      <div className='courses-container'>
        <LoadingView />
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <div className='courses-container'>
        <div className='search-elements'>
          <SearchBar
            placeholder={"Search courses by name..."}
            passKeywords={setSearchKeywords}
          />
        </div>
        <div className='header'>
          <h2>
            All Courses
            <hr />
          </h2>
        </div>
        <div className='grid-view'>
          {data?.map((course, idx) => {
            return <CourseView course={course} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};
