import React, { useEffect } from "react";
import parse from "html-react-parser";
import "./style.css";

import { Button } from "../micros/Button/Button";
import { DetailedMyCourseView } from "../micros/DetailedMyCourseView/DetailedMyCourseView";

export const MyCourseModal = ({ isModalOpen, setIsModalOpen, course }) => {
  if (!isModalOpen) return null;
  return (
    <>
      <div
        className='modal-backdrop'
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className='modal'>
        <DetailedMyCourseView course={course} />
        <div className='close-btn-div'>
          <Button handleOnClick={() => setIsModalOpen(false)}>Close</Button>
        </div>
      </div>
    </>
  );
};
