import React, { useEffect, useState } from "react";
import "./style.css";
// Component Imports
import { MyCourseView } from "../../macros/MyCourseView/MyCourseView";
import { SearchBar } from "../../micros/SearchBar/SearchBar";
// Custom Hook Imports
import { useMyCoursesData } from "../../../hooks/useMyCoursesData";
import { LoadingView } from "../../micros/LoadingView/LoadingView";

export const MyCourses = () => {
  const [searchKeywords, setSearchKeywords] = useState(null);
  // React Query On Success Handler
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  // React Query On Error Handler
  const onError = (err) => {
    console.log("Perform side effect after encountering error", err);
  };

  const { data, isError, isLoading } = useMyCoursesData(onSuccess, onError, {
    searchKeywords,
  });
  if (isLoading) {
    return (
      <div className='mycourses-container'>
        <LoadingView />
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <div className='mycourses-container'>
        <div className='search-elements'>
          <SearchBar
            placeholder={"Search courses by name..."}
            passKeywords={setSearchKeywords}
          />
        </div>
        <div className='header'>
          <h2>
            My Courses
            <hr />
          </h2>
        </div>
        <div className='grid-view'>
          {data?.map((course, idx) => {
            return <MyCourseView course={course} indx={idx} />;
          })}
        </div>
      </div>
    </>
  );
};
