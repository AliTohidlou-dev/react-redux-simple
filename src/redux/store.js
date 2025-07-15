import { createStore } from "redux";
import allRoots from "./rootReducers";

const store=createStore(allRoots);

export default store;