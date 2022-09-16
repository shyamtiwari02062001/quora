import React, { useState } from "react";
import "./footer.css";
const Footer = ({ up, down, share, chat }) => {
  const [isUpVoted, setUpVoted] = useState(false);
  const [isDownVoted, setDownvoted] = useState(false);
  const [upVote, setUpVote] = useState(200);
  const [downVote, setDownVote] = useState(150);
  const updateVote = (direction) => {
    if (direction === "up" && isUpVoted === false) {
      if (isDownVoted === true) {
        setDownvoted(false);
        setUpVoted(true);
        setDownVote((vote) => vote - 1);
        setUpVote((vote) => vote + 1);
      } else {
        setUpVoted(true);
        setUpVote((vote) => vote + 1);
      }
    }
    if (direction === "down" && isDownVoted === false) {
      if (isUpVoted === true) {
        setUpVoted(false);
        setDownvoted(true);
        setDownVote((vote) => vote + 1);
        setUpVote((vote) => vote - 1);
      } else {
        setDownvoted(true);
        setDownVote((vote) => vote + 1);
      }
    }
    if (direction === "up" && isUpVoted === true) {
      setUpVoted(false);
      setUpVote((vote) => vote - 1);
    }
    if (direction === "down" && isDownVoted === true) {
      setDownvoted(false);
      setDownVote((vote) => vote - 1);
    }
  };
  return (
    <div className="footer">
      {upVote}
      <img alt="" className="image" src={up} onClick={() => updateVote("up")} />
      {downVote}
      <img
        alt=""
        className="image"
        src={down}
        onClick={() => updateVote("down")}
      />
      <img alt="" className="image" src={share} />
      <img alt="" className="image" src={chat} />
    </div>
  );
};
export default Footer;
