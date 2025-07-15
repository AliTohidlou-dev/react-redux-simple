import { BUY_BURGER, BUY_HOTDOG } from "./foods.type";

export const buyBurger = (payload) => {
  return {
    type: BUY_BURGER,
    payload,
  };
};

export const buyHotdog = (payload) => {
  return {
    type: BUY_HOTDOG,
    payload,
  };
};
