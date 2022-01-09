import React, { useState } from "react";
import Card from "./Card";
import "./TodoForm.css";
import TimePicker from "react-time-picker";

const TodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [value, setValuetime] = useState("10:00");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const formSubmitHadler = (event) => {
    event.preventDefault();
    if (enteredTitle !== "") {
      const todoData = {
        title: enteredTitle,
        time: value,
      };
      props.onGetTasks(todoData);
      setEnteredTitle("");
    } else {
      alert("Please enter a task:");
    }
  };
  return (
    <Card className="form-block">
      <form className="form">
        <div className="form-group">
          <lable>Task</lable>
          <br />
          <input
            type="text"
            onChange={titleChangeHandler}
            className="form-control"
            value={enteredTitle}
          />
        </div>
        <div className="form-group">
          <lable>Time</lable>
          <br />
          <TimePicker onChange={setValuetime} value={value} />
        </div>
        <div className="form-group">
          <button
            type="submit"
            onClick={formSubmitHadler}
            className="btn btn-default"
          >
            Add Task
          </button>
        </div>
      </form>
    </Card>
  );
};

export default TodoForm;
