import React, { useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux";
import { RootState } from "../redux/reducers";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const TodosPage: React.FC = () => {
  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  const dispatch = useDispatch();

  // On page load
  useEffect(() => {
    dispatch(getTodos());
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
