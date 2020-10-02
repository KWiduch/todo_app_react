import React from "react";

const Nav = ({ setInputText, setToDo, toDo, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDo([
      ...toDo,
      {
        text: inputText,
        complete: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  return (
    <div className="form">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="inputer"
      />
      <button onClick={submitToDoHandler} className="form-button">
        Add
      </button>
    </div>
  );
};

export default Nav;
