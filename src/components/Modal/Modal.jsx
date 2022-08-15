import React, { useState } from "react";

export const Modal = ({ children }) => {
  const [shouldShowModal, setshouldShowModal] = useState(false);
  return <div>{children}</div>;
};
