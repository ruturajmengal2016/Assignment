import React from "react";
import Styles from "../Styles/Second.module.scss";
import Todo from "../Components/Todo";
import { useRecoilState, useRecoilValue } from "recoil";
import { todo } from "../Atoms/atoms";
import { useState } from "react";
import { remaining } from "../Selectors/selectors";
function Second() {
  const [list, setList] = useState("");
  const [data, setData] = useRecoilState(todo);
  const value = useRecoilValue(remaining)
  return (
    <div className={Styles.root}>
      <div>
        <span className={Styles.value} style={{ display: "block" }}>Remaining Task {value} </span>
        <input
          type="text"
          onChange={(event) => {
            setList(event.target.value);
          }}
        />
        &nbsp;
        <button
          onClick={() => {
            setData([...data, list]);
          }}
        >
          Add
        </button>
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default Second;
