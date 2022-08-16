import React, { useEffect, useState } from "react";
import "./style.css";

// Component Imports
import { MyCourseView } from "../../micros/MyCourseView/MyCourseView";

// Custom Hook Imports
import { useMyCoursesData } from "../../../hooks/useMyCoursesData";

export const MyCourses = () => {
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
        <div className='header'>
          <h2>My Courses</h2>
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
