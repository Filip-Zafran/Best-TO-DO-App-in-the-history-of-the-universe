import React from "react";

const DeadlineList = ({ onClick, completed, value }) => {
  return (
    <li
      className="deadlineLi"
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {new Intl.DateTimeFormat("en-US").format(value)}
    </li>
  );
};

export default DeadlineList;