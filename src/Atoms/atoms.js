import { atom } from "recoil";

const color = atom({
  key: "color",
  default: true,
});

const todo = atom({
  key: "todo",
  default: [],
});

export { color, todo };
