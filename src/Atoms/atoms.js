import { atom } from "recoil";

const todo = atom({
  key: "todo",
  default: [],
});

export { todo };
