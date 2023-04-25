import React from "react";
import Button from "./Components/Button";
import Style from "./App.module.scss";
import { increaseBtnCount } from "./redux/todoReducer";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.increase);
  const array = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A1",
    "B1",
    "C1",
    "D1",
  ];
  return (
    <div className={Style.root}>
      <div className={Style.buttons}>
        {array.map((ele, ind) => {
          return (
            <Button
              key={ind}
              value={ele}
              dispatch={dispatch}
              increaseBtnCount={increaseBtnCount}
              name={ele}
            />
          );
        })}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {array.map((ele, ind) => {
                return <th key={ind}>{ele}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {array.map((ele, ind) => {
                return <td key={ind}>{selector[ele]}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
