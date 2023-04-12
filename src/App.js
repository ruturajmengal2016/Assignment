import Styles from './Styles/App.module.scss'
import axios from "axios";
import { useEffect, useState } from "react";


export default function App() {
  const [data, setData] = useState([]);
  function handleDelete(ind) {
    const newData = data.filter((ele, index) => {
      return ind !== index;
    });
    setData(newData);
  }
  const fetchData = async () => {
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(users.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={Styles.root}>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>UserId</th>
            <th>title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{ele.userId}</td>
                <td>{ele.title}</td>
                <td
                  onClick={() => {
                    handleDelete(ind);
                  }}
                >
                  &#x274C;
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
