import React from "react";
import Button from "./Components/Button";
import Style from "./App.module.scss";
import { increaseBtnCount } from "./redux/todoReducer";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.increase);
  const array = ["A", "B", "C", "D", "E", "F", "G"];
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
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
              <th>E</th>
              <th>F</th>
              <th>G</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selector.A}</td>
              <td>{selector.B}</td>
              <td>{selector.C}</td>
              <td>{selector.D}</td>
              <td>{selector.E}</td>
              <td>{selector.F}</td>
              <td>{selector.G}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
