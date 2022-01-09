import React from "react";
import Card from "./Card";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <Card className="TodoList">
      <h2>Tasks({props.todos.length})</h2>
      {props.todos.map((todo, index) => (
        <TodoItem
          key={index}
          gettodos={todo}
          index={index}
          tasksData={props.todos}
          onRemove={props.onRemove}
        />
      ))}
    </Card>
  );
};

export default TodoList;
