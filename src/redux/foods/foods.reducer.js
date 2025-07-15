import { BUY_BURGER, BUY_HOTDOG } from "./foods.type";
const foodsInit = {
  burger: 20,
  hotdog: 10,
};
const foodsReducer = (state = foodsInit, action) => {
  switch (action.type) {
    case BUY_BURGER:
      if (state.burger === 0) return { ...state };
      return { ...state, burger: state.burger - action.payload };
    case BUY_HOTDOG:
      if (state.hotdog === 0) return { ...state };
      return { ...state, hotdog: state.hotdog - action.payload };
    default:
      return state;
  }
};

export default foodsReducer;
