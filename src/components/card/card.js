/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./card.css";
import Logo from "../../assets/my.jpg";
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import share from "../../assets/share.png";
import chat from "../../assets/chat.png";
import Avatar from "../Avatar/avatar";
const Card = ({item}) => {
  return (
    <div className="card">
      <div className="cardBox">
        <Avatar path={Logo} />
        <div className="header">
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
          <small className="header">
           {item.designation}
          </small>
        </div>
      </div>
      <div className="header">
        <p className="title">
          {item.question}
        </p>
        <p  className='para'>{item.answer}</p>
      </div>
      <div className="cardBox">
       <img alt="" style={{marginLeft:10,marginRight:10}} className='image' src={up}/>
       <img alt=""style={{marginLeft:10,marginRight:10}} className='image'src={down}/>
       <img alt=""style={{marginLeft:10,marginRight:10}} className='image'src={share}/>
       <img alt=""style={{marginLeft:10,marginRight:10}} className='image'src={chat}/>
      </div>
    </div>
  );
};
export default Card;
