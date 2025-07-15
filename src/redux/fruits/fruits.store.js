import { createStore } from "redux";
import fruitReducer from "./fruits.reducer";

const store=createStore(fruitReducer);

export default store;