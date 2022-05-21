import { ITodo } from "../../komponenter/types";
import todosActionTypes from "../actionTypes/todosActionTypes";

interface IRequestFailedAction {
  type: todosActionTypes.REQUEST_FAILED;
  payload: string;
}

interface IRequestStartActionType {
  type: todosActionTypes.REQUEST_START;
}

interface IgetTodosActionType {
  type: todosActionTypes.GET_TODOS_SUCCESS;
  payload: ITodo[];
}

interface IaddTodoActionType {
  type: todosActionTypes.ADD_TODO_SUCCESS;
  payload: ITodo;
}

interface IdeleteTodoActionType {
  type: todosActionTypes.DELETE_TODO_SUCCESS;
  payload: number;
}

interface IModifyTodoDoneStatusActionType {
  type: todosActionTypes.MODIFY_TODO_DONE_STATUS_SUCCESS;
  payload: ITodo;
}

export type ITodoActionType =
  | IRequestFailedAction
  | IRequestStartActionType
  | IgetTodosActionType
  | IaddTodoActionType
  | IdeleteTodoActionType
  | IModifyTodoDoneStatusActionType;

export const requestStartAction = (): ITodoActionType => ({
  type: todosActionTypes.REQUEST_START,
});

export const requestFailedAction = (error: string): ITodoActionType => ({
  type: todosActionTypes.REQUEST_FAILED,
  payload: error,
});

export const getTodosAction = (todos: ITodo[]): ITodoActionType => ({
  type: todosActionTypes.GET_TODOS_SUCCESS,
  payload: todos,
});

export const addTodoAction = (data: ITodo): ITodoActionType => ({
  type: todosActionTypes.ADD_TODO_SUCCESS,
  payload: data,
});

export const deleteTodoAction = (id: number): ITodoActionType => ({
  type: todosActionTypes.DELETE_TODO_SUCCESS,
  payload: id,
});

export const modifyTodoDoneStatusAction = (data: ITodo): ITodoActionType => ({
  type: todosActionTypes.MODIFY_TODO_DONE_STATUS_SUCCESS,
  payload: data,
});
