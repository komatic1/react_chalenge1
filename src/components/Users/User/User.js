import React from "react";
import "./User.css";

const User = (props) => {
  return <li className="user">{props.children}</li>;
};

export default User;
