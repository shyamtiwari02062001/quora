import React from "react";
import './avatar.css'
const Avatar = ({ path }) => {
  return (
      <img src={path} className="avatar" alt="" height={60} width={60} />
  );
};
export default Avatar;