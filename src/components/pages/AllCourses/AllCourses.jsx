import React, { useEffect } from "react";
import "./style.css";

// Component Imports
import { CourseView } from "../../micros/CourseView/CourseView";

// Custom Hook Imports
import { useAllCoursesData } from "../../../hooks/useAllCoursesData";

export const AllCourses = () => {
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

  return (
    <>
      <div className='courses-container'>
        <div className='header'>
          <h2>All Courses</h2>
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
