import { selector } from "recoil";
import { todo } from "../Atoms/atoms";

const remaining = selector({
  key: "todolist",
  get: ({ get }) => {
    const len = get(todo);
    return len.length;
  },
});

export {remaining}