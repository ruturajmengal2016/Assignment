import React from "react";
import { todo } from "../Atoms/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
function Todo() {
  const data = useRecoilValue(todo);
  const setData = useSetRecoilState(todo);
  return (
    <>
      {data.map((element, index) => {
        return (
          <div style={{ display: "block" }} key={index}>
            <span>{element}</span> &nbsp;
            <button
              onClick={() => {
                setData();
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
