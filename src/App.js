import Styles from "./Styles/App.module.scss";
import { useState } from "react";
export default function App() {
  const [data, setData] = useState({ time: "", event: "" });
  const [array, setArray] = useState([]);
  console.log(array);
  return (
    <div className={Styles.root}>
      <div className={Styles.first}>
        <h1
          onMouseOver={(e) => {
            e.preventDefault();
            setData({
              ...data,
              time: new Date().toLocaleTimeString(),
              event: e.type
            });
            setArray([...array, data]);
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            setData({
              ...data,
              time: new Date().toLocaleTimeString(),
              event: e.type
            });
            setArray([...array, data]);
          }}
        >
          Heading first
        </h1>
        <h1>Heading Second</h1>
      </div>
      <div className={Styles.second}>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {array.slice(1, array.length - 1).map((ele, ind) => {
              return (
                <tr key={ind}>
                  <td>{ele.time}</td>
                  <td>{ele.event}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
