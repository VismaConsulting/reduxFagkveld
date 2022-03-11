import { INotat } from "./../../sider/hjemmeside/hjemmeside";
import { INotatActionType } from "./../actions/notatActions";
import notatActionTypes from "../actionTypes/notatActionTypes";

interface notaterState {
  loading: boolean;
  error: string | null;
  notater: INotat[];
}

const initState: notaterState = {
  loading: false,
  error: null,
  notater: [],
};

const notaterReducer = (state = initState, action: INotatActionType) => {
  switch (action.type) {
    case notatActionTypes.REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case notatActionTypes.REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case notatActionTypes.HENT_NOTATER:
      return {
        ...state,
        loading: false,
        notater: action.payload,
      };
    case notatActionTypes.LEGG_TIL_NOTAT:
      return {
        ...state,
        loading: false,
        notater: [...state.notater, action.payload],
      };
    case notatActionTypes.SLETT_NOTAT:
      return {
        ...state,
        loading: false,
        notater: state.notater.filter((notat) => notat.id !== action.payload),
      };
    default:
      return state;
  }
};

export default notaterReducer;
