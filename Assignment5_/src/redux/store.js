import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;
