import Product from "./Components/Product";
import Styles from './Styles/App.module.scss'
import { useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState} from "recoil";
import { _product, com_list } from "./Atoms/atom";
import { product_list } from "./Atoms/atom";

export default function App() {
  const [product, setProduct] = useRecoilState(_product);
  const [proList, setproList] = useRecoilState(product_list);
  const [list, setList] = useRecoilState(com_list); 
  const navigate = useNavigate();
  const input = useRef()
  return (
    <div className={Styles.root}>
      <div  style={{position:"fixed",top:"5rem",left:"1rem"}}>
        Customer Name:
        <input type="text" onChange={(e)=>{
          input.current = e.target.value
        }}
        style={{background:"none",border:"0px 0px 2px 0px solid black",outline:"none"}}
         />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          height: "50%",
          width:"80%",
          backgroundColor:"#f44336",
          boxSizing:"border-box",
          color:"white",
          overflow:"auto",
          padding:"1rem"
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
        style={{ position: "fixed", bottom: "5rem", left: "100px",padding:"0.5rem",boxSizing:"border-box",backgroundColor:"green",color:"white",fontWeight:"bold" }}
        onClick={() => {
          setproList([...proList,product])
          navigate("/bill", { state:{name:input.current} });
        }}
      >
        Generate
      </button>
    </div>
  );
}
