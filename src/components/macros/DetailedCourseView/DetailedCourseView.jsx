import React from "react";

export const DetailedCourseView = ({
  course,
  mediaData,
  categoryData,
  authorData,
}) => {
  console.log("mediaData: ", { mediaData, categoryData, authorData });
  return <div>{course.title.rendered}</div>;
};
