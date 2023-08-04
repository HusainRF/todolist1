import React from "react";

const ToDoList = (props) => {

  return (
    <>
        <div className="todo_style">
           
            <li> 
              <button className="delete-button" onClick={props.onSelect}> x </button>
              {props.text}
            </li>
        </div>
    </>
  );
};


export default ToDoList;
