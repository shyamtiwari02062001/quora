import React from "react";
import Card from "../card/card";
import Data from "../../constants/data";
const Feed = () => {
  return (
    <div>
     {Data.map((items)=><Card item={items}/>)}
    </div>
  );
};
export default Feed;
