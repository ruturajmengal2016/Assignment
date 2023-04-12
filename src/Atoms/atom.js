import { atom } from "recoil";

export const _product = atom({
  key: "product",
  default: { product: "", quantity: "" },
});

export const com_list = atom({
  key: "comlist",
  default: [],
});

export const product_list = atom({
  key: "product_list",
  default: [],
});
