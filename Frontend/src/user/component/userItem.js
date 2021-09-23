import React from "react";
import "./userItem.css";

const userItem = (props) => {
  return (
    <li>
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <h3>
          {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
        </h3>
      </div>
    </li>
  );
};

export default userItem;
