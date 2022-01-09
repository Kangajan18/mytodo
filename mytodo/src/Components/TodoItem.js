import React, { useState } from "react";
import "./TodoItem.css";
import Card from "./Card";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    console.log("checked clicked" + isChecked);
  };
  return (
    <Card className={`Todo-item ${isChecked ? "checked" : ""}`}>
      <div className="Todo-item__time">
        <h4>{props.gettodos.time}</h4>
      </div>
      <div className={`Todo-item__title ${isChecked ? "checked" : ""}`}>
        {props.gettodos.title}
      </div>
      <div className="Todo-item__buttons">
        <button className="btn btn-success" onClick={checkHandler}>
          Check
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            props.onRemove(props.index);
          }}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};

export default TodoItem;
