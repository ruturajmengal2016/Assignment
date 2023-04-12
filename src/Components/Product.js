import {useSetRecoilState } from "recoil";
import { _product } from "../Atoms/atom";
export default function Product() {
  const setPro = useSetRecoilState(_product);
  return (
    <div style={{ display: "flex", justifyContent: "space-around", flex: 1 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <label htmlFor="Products">Select Product:</label>
        <select
          defaultValue={"default"}
          name="product"
          id="product"
          onChange={(e) => {
            setPro((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        >
          <option value="default" disabled>
            Choose options...
          </option>
          <option value="Sugar">Sugar</option>
          <option value="Honey">Honey</option>
          <option value="Oats">Oats</option>
          <option value="Salt">Salt</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <label htmlFor="Quantity">Quantity</label>
        <input
          type="text"
          name="quantity"
          onChange={(e) => {
            setPro((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        />
      </div>
    </div>
  );
}
