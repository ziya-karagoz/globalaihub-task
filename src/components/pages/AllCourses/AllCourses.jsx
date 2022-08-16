import React, { useEffect } from "react";
import { useAllCoursesData } from "../../../hooks/useAllCoursesData";
import { CourseView } from "../../micros/CourseView/CourseView";
import "./style.css";
export const AllCourses = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (err) => {
    console.log("Perform side effect after encountering error", err);
  };
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
