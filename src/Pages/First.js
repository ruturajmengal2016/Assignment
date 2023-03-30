import React, { useEffect, useState } from "react";
import Styles from "../Styles/First.module.scss";
function First() {
  const [count, setCount] = useState();
  useEffect(() => {
    fun();
  }, []);
  const fun = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const image = await response.json();
    setCount(image.message);
  };
  return (
    <div className={Styles.root}>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <img src={count} alt="" />
        </div>
        <div className={Styles.right}>
          <button onClick={fun}>Click</button>
        </div>
      </div>
    </div>
  );
}

export default First;
