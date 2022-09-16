import React from "react";
import './avatar.css'
const Avatar = ({ path,size }) => {
  return (
      <img src={path} className="avatar" alt="" height={size} width={size} />
  );
};
export default Avatar;