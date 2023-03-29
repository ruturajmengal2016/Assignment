import { useRef, useState } from "react";
import Styles from "./Styles/App.module.scss";

function App() {
  const [number, setNumber] = useState(0);
  const input = useRef()
  const handleClick = (number) => {
    if (number === "50") {
      alert("Your guess is right!");
    } else if (number < 50) {
      alert("Your guess is too small"); 
    } else if (number > 50) {
      alert("Your guess is too big");
    }
  };
  return (
    <div className={Styles.root}>
      <div className={Styles.first_div}>
        <input
          type="text"
          placeholder="Guess the Number.."
          onChange={(event) => {
            setNumber(event.target.value);
          }} ref={input}
        />
        <button
          onClick={() => {
            handleClick(number);
          }}
        >
          Match
        </button>
      </div>
    </div>
  );
}

export default App;
