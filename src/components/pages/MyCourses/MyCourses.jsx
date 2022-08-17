import React, { useEffect, useState } from "react";
import "./style.css";
import Select from "react-select";
// Component Imports
import { MyCourseView } from "../../micros/MyCourseView/MyCourseView";
import { SearchBar } from "../../micros/SearchBar/SearchBar";
// Custom Hook Imports
import { useMyCoursesData } from "../../../hooks/useMyCoursesData";

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
            return <MyCourseView course={course} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};
