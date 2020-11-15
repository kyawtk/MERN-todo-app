import React from "react";
const TodoItem = (props) => {
  return (
    <div className="todoitem" >
      <h1>{props.passtodo.todo}</h1><span>Created on {props.date.getDay()}/{props.date.getMonth()}/{props.date.getFullYear()}</span>
      <h2>Deadline:{props.passtodo.day}</h2>
  <button onClick={()=>props.deltodo(props.passtodo._id)}>Done</button>

     
    </div>
  );
};

export default TodoItem;

//