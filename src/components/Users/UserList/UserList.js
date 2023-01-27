import React from "react";
import User from "../User/User";
import "./UserList.css";

const UserList = (props) => {
  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <User key={user.id} id={user.id}>
          {user.name} - {user.age} лет.
        </User>
      ))}
    </ul>
  );
};

export default UserList;
