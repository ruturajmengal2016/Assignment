import { product_list } from "../Atoms/atom";
import { useRecoilValue } from "recoil";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
const data = {
  Sugar: "250",
  Honey: "400",
  Oats: "300",
  Salt: "10",
  Tea: "50",
};

export default function Bill() {
  const proList = useRecoilValue(product_list);
  const location = useLocation();
  const date = new Date().toLocaleDateString();
  const initital = useMemo(() => {
    let sum = 0;
    for (let i = 1; i < proList.length; i++) {
      sum += parseInt(proList[i]["quantity"] * data[proList[i]["product"]]);
    }
    return sum;
  }, [proList]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "orange",
        padding: "1rem",
      }}
    >
      <h1>Billing Form</h1>
      <h2>Customer Name : {location.state.name}</h2>
      <hr />
      <hr />
      <table style={{ border: "2px solid black", height: "50%" }}>
        <thead>
          <tr>
            <td colSpan="4" style={{ border: "2px solid black" }}>
              Customer Name :{location.state.name}
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ border: "2px solid black" }}>
              Date :{date}
            </td>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          <tr style={{ fontSize: "1.5rem", fontWeight: "bold", color: "blue" }}>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          {proList.slice(1, proList.length).map((ele, ind) => {
            return (
              <tr key={ind}>
                <td>{ele.product}</td>
                <td>{data[ele.product]}</td>
                <td>{ele.quantity}</td>
                <td>{ele.quantity * data[ele.product]}</td>
              </tr>
            );
          })}
          <td colSpan="3" style={{ textAlign: "left" }}>
            Total
          </td>
          <td>&#x20B9; {initital}</td>
        </tbody>
      </table>
    </div>
  );
}
