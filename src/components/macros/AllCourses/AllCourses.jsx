import React, { useEffect } from "react";
import { useAllCoursesData } from "../../../hooks/useAllCoursesData";
export const AllCourses = () => {
  const { data, isError, isLoading } = useAllCoursesData();
  useEffect(() => {
    console.log("AllCourses: ", data?.data);
  }, [data]);

  return <div></div>;
};
