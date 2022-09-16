/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./footer.css";
import Logo from "../../assets/my.jpg";
import Avatar from "../Avatar/avatar";
const Footer = ({ up, down, share, chat }) => {
  const [isUpVoted, setUpVoted] = useState(false);
  const [isDownVoted, setDownvoted] = useState(false);
  const [upVote, setUpVote] = useState(200);
  const [downVote, setDownVote] = useState(150);
  const [comment, setComment] = useState(8);
  const [shares, setShares] = useState(5);
  const [isAddingComment, setAddingComment] = useState(false);
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
    <>
      <div className="footer">
        <img
          alt=""
          className="image"
          src={up}
          onClick={() => updateVote("up")}
        />
        <small className="text">{upVote}</small>
        <img
          alt=""
          className="image"
          src={down}
          onClick={() => updateVote("down")}
        />
        <small className="text">{downVote}</small>
        <img alt="" className="image" src={share} />
        <small className="text">{shares}</small>
        <img
          alt=""
          className="image"
          src={chat}
          onClick={() => {
            setAddingComment((val) => !val);
          }}
        />
        <small className="text">{comment}</small>
      </div>
      {isAddingComment && (
        <div className="commentContainer">
          <div
           className="commentHeader"
          >
            <Avatar path={Logo} size={30} />
            <input
              className="commentInput"
            />
            <button class="button">Add Comment</button>
          </div>
          <div className="cardBox">
            <Avatar path={Logo} size={30}/>
            <div className="commentSpacing">
              <a href="" className="link">
                <b>Shyam</b>
              </a>
            </div>
          </div>
          <div className="commentSpacing">
            <spam className="comment">
              I don't mind you respecting Prabhas for this gesture. I also
              admire him as an actor, no second thought. But, don't you think
              you are more inclined towards a famous person than the boy losing
              his life? The fact is, you don't really care about the boy losing
              his life. If you look at it carefully, even you wouldn't resist
              meeting somebody who would want to see you before they are dying
              or are you so heartless? If this is true, then why a special
              status for Prabhas? Think about it.
            </spam>
          </div>
        </div>
      )}
    </>
  );
};
export default Footer;
