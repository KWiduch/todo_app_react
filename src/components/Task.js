import React from "react";
import OneTask from "./OneTask";

const Task = ({ toDo, setToDo }) => {
  return (
    <div className="task-container">
      <ul className="task-list">
        {toDo.map((t) => (
          <OneTask
            key={t.id}
            text={t.text}
            toDo={toDo}
            setToDo={setToDo}
            t={t}
          />
        ))}
      </ul>
    </div>
  );
};

export default Task;
