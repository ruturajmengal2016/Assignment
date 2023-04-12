import { product_list } from "../Atoms/atom";
import { useRecoilValue } from "recoil";
import { useLocation } from "react-router-dom";
const data = {
  Sugar: "250",
  Honey: "400",
  Oats: "300",
  Salt: "10",
};
export default function Bill() {
  const proList = useRecoilValue(product_list);
  const location = useLocation();
  const date = new Date().toLocaleDateString();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "orange",
      }}
    >
      <h1>Billing Form</h1>
      <h2>Customer Name : {location.state.name}</h2>
      <hr />
      <hr />
      <table style={{ border: "2px solid black",height:"50%" }}>
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
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
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
          <td>{location.state.amount}</td>
        </tbody>
      </table>
    </div>
  );
}
