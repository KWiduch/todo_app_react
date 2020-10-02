import React, { useState } from "react";
import Nav from "./components/Nav";
import Task from "./components/Task";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  const [toDo, setToDo] = useState([]);

  return (
    <div className="App">
      <h1 className="banner">My To do list !</h1>
      <Nav
        setInputText={setInputText}
        inputText={inputText}
        setToDo={setToDo}
        toDo={toDo}
      />
      <Task toDo={toDo} setToDo={setToDo} />
    </div>
  );
}

export default App;
