import React from "react";

const Button = ({ value, dispatch, increaseBtnCount, name }) => {
  return (
    <div>
      <button
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
