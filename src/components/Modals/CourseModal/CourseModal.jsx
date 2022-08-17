import React, { useEffect } from "react";
import parse from "html-react-parser";
import "./style.css";

import { Button } from "../../micros/Button/Button";
import { DetailedCourseView } from "../../macros/DetailedCourseView/DetailedCourseView";

export const CourseModal = ({
  isModalOpen,
  setIsModalOpen,
  course,
  mediaData,
  categoryData,
  authorData,
}) => {
  if (!isModalOpen) return null;
  return (
    <>
      {/* Backdrop of modal */}
      <div
        className='modal-backdrop'
        onClick={() => setIsModalOpen(false)}
      ></div>
      {/* Modal */}
      <div className='modal'>
        <DetailedCourseView
          course={course}
          mediaData={mediaData}
          categoryData={categoryData}
          authorData={authorData}
        />
        {/* Close modal button */}
        <div className='close-btn-div'>
          <Button handleOnClick={() => setIsModalOpen(false)}>Close</Button>
        </div>
      </div>
    </>
  );
};
