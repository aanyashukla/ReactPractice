import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        {/*key is not something that we can tap into, so we have have to create our custom prop hence used prop named id*/}
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom"></div>
      <Detail detailInfo={props.tel} />
      <Detail detailInfo={props.email} />
    </div>
  );
}

export default Card;
