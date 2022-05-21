import React, { useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Form,
  Card,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { todosActionCreator } from "../redux";
import { RootState } from "../redux/reducers";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const TodosPage: React.FC = () => {
  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  const dispatch = useDispatch();
  const { getTodos } = bindActionCreators(todosActionCreator, dispatch);

  // On page load
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container className="py-5">
      <h1 className="display-5">Gjøremål</h1>
      <p className="lead text-muted">Gjøremålliste laget med React og Redux</p>
      {error && <p className="text-danger">{error}</p>}

      <AddTodo />

      <Container
        style={{ height: "50px" }}
        className="text-center w-100 p-3 bg-light"
      >
        {loading && <Spinner animation="border" />}
      </Container>

      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </Container>
  );
};

export default TodosPage;
