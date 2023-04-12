import Product from "./Components/Product";
import Styles from './Styles/App.module.scss'
import { useRef} from "react";
import { useNavigate } from "react-router-dom";
import { bill } from "./Selectors/selector";
import { useRecoilState, useRecoilValue } from "recoil";
import { _product, com_list } from "./Atoms/atom";
import { product_list } from "./Atoms/atom";
export default function App() {
  const amount = useRecoilValue(bill); 
  const [product, setProduct] = useRecoilState(_product);
  const [proList, setproList] = useRecoilState(product_list);
  const [list, setList] = useRecoilState(com_list); 
  const navigate = useNavigate();
  const input = useRef()
  console.log(proList)
  return (
    <div className={Styles.root}>
      <div  style={{position:"fixed",top:"1rem",left:"1rem"}}>
        Customer Name:
        <input type="text" onChange={(e)=>{
          input.current = e.target.value
        }}
       
         />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          height: "90%",
          flex: "1",
        }}
      >
        {list.map((ele, ind) => {
          return (
            <div style={{ display: "block" }} key={ind}>
              {ele}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setList([...list, <Product />]);
          setproList([...proList,product])
        }}
      >
        Add items
      </button>
  
      <button
        style={{ position: "fixed", bottom: "5px", left: "100px" }}
        onClick={() => {
          setproList([...proList,product])
          navigate("/bill", { state:{amount:amount,name:input.current} });
        }}
      >
        Generate
      </button>
    </div>
  );
}
