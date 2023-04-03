import React from "react";
import { todo } from "../Atoms/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Styles from '../Styles/Todo.module.scss'
function Todo() {
  const data = useRecoilValue(todo);
  const setData = useSetRecoilState(todo);
  const handleClick = (index) => {
    const newData = data.filter((e, ind) => {
      return index !== ind;
    });
    setData([...newData]);
  };
  return (
    <>
    
      {data.map((element, index) => {
        return (
          <div style={{ display: "block" }} key={index} className={Styles.root}>
            <span className={Styles.task}>{element}</span> &nbsp;
            <button onClick={() => handleClick(index)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
