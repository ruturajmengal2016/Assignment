import React from "react";
import Style from "./App.module.scss";
import ComboBox from "./Components/Finder";
const App = () => {
  return (
    <div className={Style.root}>
      <div className={Style.search}>
        <ComboBox />
      </div>
    </div>
  );
};

export default App;
