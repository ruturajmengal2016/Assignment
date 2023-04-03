import React from "react";
import { useRecoilState } from "recoil";
// import {useRecoilValue} from 'recoil'
import { count } from "../Atoms/atoms";
function Home() {
  const [value, setCount] = useRecoilState(count);
  //   const value = useRecoilValue(count);
  return (
    <div>
      {value}
      <button
        onClick={() => {
          setCount(value + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Home;
