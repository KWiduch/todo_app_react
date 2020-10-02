import React from "react";

const OneTask = ({ text, toDo, setToDo, t }) => {
  const deleteTask = () => {
    setToDo(toDo.filter((el) => el.id !== t.id));
    // console.log(t);
  };

  const doneTask = () => {
    setToDo(
      toDo.map((el) => {
        if (el.id === t.id) {
          return {
            ...el,
            complete: !el.complete,
          };
        }
        return el;
      })
    );
  };
  return (
    <div className="task-container-todo">
      <li className={`taskToDo ${t.complete ? "complete" : ""}`}>{text}</li>
      <button onClick={doneTask} className="check-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTask} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default OneTask;
