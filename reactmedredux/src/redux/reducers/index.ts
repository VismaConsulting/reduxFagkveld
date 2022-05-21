import { combineReducers } from "redux";
import todosReducer from "./todosReducer";

const reducers = combineReducers({
  todos: todosReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
