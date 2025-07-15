import { BUY_APPLE, BUY_ORANGE } from "./fruits.type";

const fruitsInit = {
  apple: 4,
  orange: 3,
};

const fruitReducer = (state = fruitsInit, action) => {
  switch (action.type) {
    case BUY_APPLE:
      if (state.apple === 0) return{...state};
      return { ...state, apple: state.apple - 1 };
    case BUY_ORANGE:
      if (state.orange === 0) return{...state};
      return { ...state, orange: state.orange - 1 };
    default:
      return state;
  }
};

export default fruitReducer;
