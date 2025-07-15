import { BUY_APPLE, BUY_ORANGE } from "./fruits.type";

const fruitsInit = {
  apple: 4,
  orange: 3,
};

const fruitReducer = (state = fruitsInit, action) => {
  switch (action.type) {
    case BUY_APPLE:
      if (state.apple === 0) return{...state};
      return { ...state, apple: state.apple - action.payload };
    case BUY_ORANGE:
      if (state.orange === 0) return{...state};
      return { ...state, orange: state.orange - action.payload };
    default:
      return state;
  }
};

export default fruitReducer;
