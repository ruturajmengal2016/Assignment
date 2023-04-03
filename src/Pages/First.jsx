import React from "react";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { color } from "../Atoms/atoms";
import Styles from "../Styles/First.module.scss";
import { colors } from "../Selectors/selectors";
function First() {
  const [_color, setColor] = useRecoilState(color);
  const value = useRecoilValue(colors);
  console.log(value);
  return (
    <div className={Styles.root}>
      <span className={Styles.text}>The color is {value ? "red" : "blue"}</span>
      <span className={_color ? Styles.red : Styles.blue}>
        Hi, I change the color on Click button
      </span>
      <button
        onClick={() => {
          setColor(!_color);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default First;
