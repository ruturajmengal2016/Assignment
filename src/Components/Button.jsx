import React from "react";

const Button = ({ value, dispatch, increaseBtnCount, name }) => {
  return (
    <div>
      <button
        style={{
          color: "red",
          backgroundColor: "lightblue",
          padding: "0.5rem",
          boxSizing: "border-box",
        }}
        onClick={() => {
          dispatch(increaseBtnCount({ name: name }));
        }}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
