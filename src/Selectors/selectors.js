import { selector } from "recoil";
import { color } from "../Atoms/atoms";

const colors = selector({
  key: "todolist",
  get: ({ get }) => {
   return get(color) ? "red" : "blue"
  },
});

export {colors}