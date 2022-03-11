import { IKonsulent } from "../../sider/hjemmeside/hjemmeside";
import { IKonsulenterActionType } from "../actions/konsulenterActions";
import konsulenterActionTypes from "../actionTypes/konsulenterActionTypes";

interface konsulenterState {
  loading: boolean;
  error: string | null;
  konsulenter: IKonsulent[];
}

const initState: konsulenterState = {
  loading: false,
  error: null,
  konsulenter: [],
};

const konsulenterReducer = (
  state = initState,
  action: IKonsulenterActionType
) => {
  switch (action.type) {
    case konsulenterActionTypes.REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case konsulenterActionTypes.REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case konsulenterActionTypes.HENT_KONSULENTER_SUCCESS:
      return {
        ...state,
        loading: false,
        konsulenter: action.payload,
      };
    case konsulenterActionTypes.LEGG_TIL_KONSULENT_SUCCESS:
      return {
        ...state,
        loading: false,
        konsulenter: [...state.konsulenter, action.payload],
      };
    case konsulenterActionTypes.SLETT_KONSULENT_SUCCESS:
      return {
        ...state,
        loading: false,
        konsulenter: state.konsulenter.filter(
          (konsulent) => konsulent.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default konsulenterReducer;
