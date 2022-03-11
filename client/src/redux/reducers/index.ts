import { combineReducers } from "redux";
import notaterReducer from "./notaterReducer";

const reducers = combineReducers({
  notater: notaterReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
