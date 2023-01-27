import React, { useState } from "react";
import "./App.css";

import UserList from "./components/Users/UserList/UserList";
import UserInput from "./components/Users/UserInput/UserInput";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Вася", age: 10, id: "u1" },
    { name: "Пупка", age: 11, id: "u2" },
    { name: "Пупа", age: 12, id: "u3" },
    { name: "Пупа", age: 13, id: "u4" },
  ]);

  const addUserHandler = (inputTextName, inputTextAge) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: inputTextName, // нужно новое имя
        age: inputTextAge, // и возраст
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>Пользователей не найдено! Добавить?</p>
  );

  if (users.length > 0) {
    content = <UserList items={users} />;
  }

  return (
    <div>
      <section id="user-form">
        <UserInput onAddTask={addUserHandler} />
      </section>
      <section id="users">{content}</section>
    </div>
  );
};

export default App;
