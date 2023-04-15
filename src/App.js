import React, { useState } from "react";
import Style from "./App.module.scss";
import Card from "./Components/Card";
const App = () => {
  const [data, setData] = useState({ title: "", text: "" });
  return (
    <div className={Style.root}>
      <div className={Style.first}>
        <div>hello</div>
      </div>
      <div className={Style.second}>
        <div className={Style.child1}>World</div>
        <div className={Style.child2}>
          <Card
            title="Complete My Assignment"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, rerum? Optio cupiditate quis molestiae voluptatum magni dolorum reprehenderit numquam tempora."
          />
          <Card
            title="Complete My Assignment"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, rerum? Optio cupiditate quis molestiae voluptatum magni dolorum reprehenderit numquam tempora."
          />
          <Card
            title="Complete My Assignment"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, rerum? Optio cupiditate quis molestiae voluptatum magni dolorum reprehenderit numquam tempora."
          />
          <Card
            title="Complete My Assignment"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, rerum? Optio cupiditate quis molestiae voluptatum magni dolorum reprehenderit numquam tempora."
          />
          <Card
            title="Complete My Assignment"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, rerum? Optio cupiditate quis molestiae voluptatum magni dolorum reprehenderit numquam tempora."
          />
          <Card
            title="Complete My Assignment"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, rerum? Optio cupiditate quis molestiae voluptatum magni dolorum reprehenderit numquam tempora."
          />
          <Card
            title="Complete My Assignment"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, rerum? Optio cupiditate quis molestiae voluptatum magni dolorum reprehenderit numquam tempora."
          />
        </div>
      </div>
    </div>
  );
};

export default App;
