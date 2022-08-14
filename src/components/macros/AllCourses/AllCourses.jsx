import React from "react";
import { useAllCoursesData } from "../../../hooks/useAllCoursesData";
export const AllCourses = () => {
  const { data, isError, isLoading } = useAllCoursesData();
  console.log(data);
  return <div></div>;
};
