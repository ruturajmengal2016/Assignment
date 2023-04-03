import React from "react";
import Styles from "../Styles/Second.module.scss";
import Todo from "../Components/Todo";
import { useRecoilState } from "recoil";
import { todo } from "../Atoms/atoms";
import { useState } from "react";
function Second() {
  const [list, setList] = useState("");
  const [data, setData] = useRecoilState(todo);
  return (
    <div className={Styles.root}>
      <div>
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
