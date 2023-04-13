import { selector } from "recoil";
import { product_list } from "../Atoms/atom";
const data = {
  Sugar: "250",
  Honey: "400",
  Oats: "300",
  Salt: "10",
  Tea: "50",
};
export const bill = selector({
  key: "bills",
  get: ({ get }) => {
    let sum = 0;
    const amount = get(product_list);
    for (let i = 1; i < amount.length; i++) {
      for (let j in data) {
        if (amount[i].product === j) {
          sum += Number(data[String(j)] * amount[i].quantity);
        }
      }
    }
    return sum;
  },
});
