import React, { useEffect, useState } from "react";
import Styles from "../Styles/First.module.scss";
function First() {
  const [store, setStore] = useState();

  useEffect(() => {
    apiCall();
  }, []);

  // Ajax call
  const apiCall = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const image = await response.json();
    setStore(image.message);
  };
  console.log(store)
  return (
    <div className={Styles.root}>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <img src={store} alt="error" />
        </div>
        <div className={Styles.right}>
          <button onClick={apiCall}>Click</button>
        </div>
      </div>
    </div>
  );
}

export default First;
