import { BUY_APPLE, BUY_ORANGE } from "./fruits.type";

export const buyApple = (payload) => {
  return {
    type: BUY_APPLE,
    payload,
  };
};
export const buyOrange = (payload) => {
  return {
    type: BUY_ORANGE,
    payload,
  };
};
