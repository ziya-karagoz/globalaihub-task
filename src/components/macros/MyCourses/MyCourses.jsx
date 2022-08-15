import React, { useEffect } from "react";
import { useMyCoursesData } from "../../../hooks/useMyCoursesData";
import { CourseView } from "../../micros/CourseView/CourseView";
import "./style.css";
export const MyCourses = () => {
  const { data, isError, isLoading } = useMyCoursesData();

  return (
    <div className='container'>
      <div className='header'>
        <h2>My Courses</h2>
      </div>
      <div className='grid-view'>
        {data?.data.map((course, idx) => {
          return <CourseView course={course} key={idx} />;
        })}
      </div>
    </div>
  );
};
