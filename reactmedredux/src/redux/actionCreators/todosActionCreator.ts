import { modifyTodoDoneStatusAction } from "./../actions/todosActions";
import axios, { AxiosError } from "axios";
import { Dispatch } from "react";
import { ITodo } from "../../komponenter/types";
import {
  getTodosAction,
  ITodoActionType,
  addTodoAction,
  requestFailedAction,
  requestStartAction,
  deleteTodoAction,
} from "../actions/todosActions";

interface IGetTodoQueryResponse {
  data: ITodo[];
}

interface IAddTodoQueryResponse {
  data: ITodo;
}

interface IDeleteTodoQueryResponse {
  data: number;
}

interface IModifyTodoDoneStatusQueryResonse {
  data: ITodo;
}

export const getTodos = () => async (dispatch: Dispatch<ITodoActionType>) => {
  dispatch(requestStartAction());
  axios
    .get("/api/todos")
    .then((response: IGetTodoQueryResponse) => {
      dispatch(getTodosAction(response.data));
    })
    .catch((error: AxiosError) => {
      dispatch(requestFailedAction(error.message));
    });
};

interface IAddTodoProps {
  text: string;
}

export const addTodo =
  ({ text }: IAddTodoProps) =>
  async (dispatch: Dispatch<ITodoActionType>) => {
    dispatch(requestStartAction());
    axios
      .post("/api/todos", {
        text,
      })
      .then((response: IAddTodoQueryResponse) => {
        dispatch(addTodoAction(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(requestFailedAction(error.message));
      });
  };

export const deleteTodo =
  (id: number) => async (dispatch: Dispatch<ITodoActionType>) => {
    dispatch(requestStartAction());
    axios
      .delete(`/api/todos/${id}`)
      .then((response: IDeleteTodoQueryResponse) => {
        dispatch(deleteTodoAction(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(requestFailedAction(error.message));
      });
  };

interface IModifyTodoDoneStatusProps {
  id: number;
  done: boolean;
}
export const modifyTodoDoneStatus =
  ({ id, done }: IModifyTodoDoneStatusProps) =>
  async (dispatch: Dispatch<ITodoActionType>) => {
    dispatch(requestStartAction());
    axios
      .patch(`/api/todos/${id}`, { done })
      .then((response: IModifyTodoDoneStatusQueryResonse) => {
        dispatch(modifyTodoDoneStatusAction(response.data));
      })
      .catch((error: AxiosError) => {
        dispatch(requestFailedAction(error.message));
      });
  };
