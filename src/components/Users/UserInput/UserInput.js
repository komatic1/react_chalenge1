import React, { useState } from "react";
import "./UserInput.css";

const UserInput = (props) => {
  const [inputTextName, setInputTextName] = useState("");
  const [inputTextAge, setInputTextAge] = useState("");
  const [isInputValidName, setIsInputValidName] = useState(true);
  const [isInputValidAge, setIsInputValidAge] = useState(true);

  const userInputChangeNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValidName(true);
    }
    setInputTextName(event.target.value);
  };

  const userInputChangeAgeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValidAge(true);
    }
    setInputTextAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputTextName.trim().length === 0) {
      setIsInputValidName(false);
      alert("Не введено имя.");
      return;
    }
    if (inputTextAge < 0) {
      setIsInputValidAge(false);
      alert("Возраст меньше нуля");
      return;
    }
    props.onAddTask(inputTextName, inputTextAge);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isInputValidName ? "invalid" : ""}`}>
        <label>Имя</label>
        <input type="text" onChange={userInputChangeNameHandler} />
      </div>
      <div className={`form-control ${!isInputValidAge ? "invalid" : ""}`}>
        <label>Возраст</label>
        <input type="number" onChange={userInputChangeAgeHandler} />
      </div>
      <button type="submit">Добавить пользователя</button>
    </form>
  );
};

export default UserInput;
