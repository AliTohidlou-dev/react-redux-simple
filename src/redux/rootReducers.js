import { combineReducers } from "redux";
import fruitReducer from "./fruits/fruits.reducer";
import foodsReducer from "./foods/foods.reducer";

const allRoots=combineReducers({
  fruits:fruitReducer,
  foods:foodsReducer,
});

export default allRoots;