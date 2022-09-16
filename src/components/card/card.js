/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./card.css";
import Logo from "../../assets/my.jpg";
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import share from "../../assets/share.png";
import chat from "../../assets/chat.png";
import Avatar from "../Avatar/avatar";
import Footer from "../footer/Footer";
const Card = ({item}) => {
  return (
    <div className="card">
      <div className="cardBox">
        <Avatar path={Logo} size={60} />
        <div className="gap">
          <a
            href=""
           className="link"
          >
            <b>{item.name}</b>
          </a>
          .{" "}
          <a
            href=""
            className="link"
          >
            Follow
          </a>
          <br />
          <small className="gap">
           {item.designation}
          </small>
        </div>
      </div>
      <div className="gap">
        <p className="title">
          {item.question}
        </p>
        <spam  className='para'>{item.answer}</spam>
      </div>
      <Footer up={up} down={down} share={share} chat={chat}/>
    </div>
  );
};
export default Card;
