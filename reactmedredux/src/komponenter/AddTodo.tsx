import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux";

const AddTodo = () => {
  const [text, setText] = React.useState<string>("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col sm={8} lg={5}>
          <Form.Control
            className="h-100"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Skriv inn gjøremål..."
          />
        </Col>
        <Col sm={4} lg={3}>
          <Button className="w-100 h-100" variant="success" type="submit">
            + Legg til gjøremål
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default AddTodo;
