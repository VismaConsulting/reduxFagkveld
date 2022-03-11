import { combineReducers } from "redux";
import konsulenterReducer from "./konsulenterReducer";

const reducers = combineReducers({
  konsulenter: konsulenterReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
