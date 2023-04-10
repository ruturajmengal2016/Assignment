import { useState } from "react";
import Styles from "./Styles/App.module.scss";
export default function App() {
  const [store, setStore] = useState(Math.floor(Math.random() * 100));
  const [array, setArray] = useState([]);
  const randomNum = () => {
    return Math.floor(Math.random() * 100);
  };
  return (
    <div className={Styles.root}>
      <button
        onClick={() => {
          setStore(randomNum);
          setArray([...array, store]);
        }}
        style={{ display: "block" }}
      >
        Generate
      </button>

      <table>
        <thead>
          <th>Random Numbers</th>
        </thead>
        <tbody>
          {array.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td>{ele}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          setArray([]);
        }}
        style={{ display: "block" }}
      >
        Clear
      </button>
    </div>
  );
}
