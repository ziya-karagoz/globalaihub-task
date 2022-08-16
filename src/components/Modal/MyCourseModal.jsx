import React, { useEffect } from "react";
import parse from "html-react-parser";
import "./style.css";

import { Button } from "../micros/Button/Button";
import { DetailedMyCourseView } from "../micros/DetailedMyCourseView/DetailedMyCourseView";

export const MyCourseModal = ({ isModalOpen, setIsModalOpen, course }) => {
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
        <DetailedMyCourseView course={course} />
        {/* Close modal button */}
        <div className='close-btn-div'>
          <Button handleOnClick={() => setIsModalOpen(false)}>Close</Button>
        </div>
      </div>
    </>
  );
};
