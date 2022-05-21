import { ITodo } from "../../komponenter/types";
import { ITodoActionType } from "../actions/todosActions";
import todosActionTypes from "../actionTypes/todosActionTypes";

interface todosState {
  loading: boolean;
  error: string | null;
  todos: ITodo[];
}

const initState: todosState = {
  loading: false,
  error: null,
  todos: [],
};

const todosReducer = (state = initState, action: ITodoActionType) => {
  switch (action.type) {
    case todosActionTypes.REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case todosActionTypes.REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case todosActionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case todosActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    case todosActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case todosActionTypes.MODIFY_TODO_DONE_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, done: action.payload.done }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
