import React, { useState } from "react";
import Style from "./App.module.scss";
import Card from "./Components/Card";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { createContext } from "react";
export const UserCard = createContext();
const App = () => {
  const [data, setData] = useState({
    title: "Complete My Assignment",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, rerum? Optio cupiditate quis molestiae voluptatum magni dolorum reprehenderit numquam tempora.",
  });
  const [card, setCard] = useState([]);
  return (
    <UserCard.Provider value={{ card, setCard}}>
      <div className={Style.root}>
        <div className={Style.first}>
          <div
            onClick={() => {
            }}
          >
          </div>
        </div>
        <div className={Style.second}>
          <div className={Style.child1}>
            <abbr title="Add New Note">
              <ControlPointIcon
                sx={{ fontSize: "3rem", color: "white" }}
                onClick={() => {
                  setCard([
                    ...card,
                    <Card title={data.title} text={data.text} />,
                  ]);
                }}
              />
            </abbr>
          </div>
          <div className={Style.child2}>
            {card.map((ele, ind) => {
              return ele;
            })}
          </div>
        </div>
      </div>
    </UserCard.Provider>
  );
};

export default App;
