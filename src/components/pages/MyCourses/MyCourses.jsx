import React, { useEffect, useState } from "react";
import "./style.css";
import { categoryOptions, tagOptions } from "../../../utils/constants";
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

  const { data, isError, isLoading } = useMyCoursesData(onSuccess, onError);

  return (
    <>
      <div className='mycourses-container'>
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
            My Courses
            <hr />
          </h2>
        </div>
        <div className='grid-view'>
          {data?.data.map((course, idx) => {
            return <MyCourseView course={course} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};
