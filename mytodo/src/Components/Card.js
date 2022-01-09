import React from "react";
import "./Card.css";

const Card = (props) => {
  let classes = "Card " + props.className;
  let style = props.style;
  return (
    <div className={classes} style={style}>
      {props.children}
    </div>
  );
};

export default Card;
