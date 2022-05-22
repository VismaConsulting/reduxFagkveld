import { Button, Row, Col, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, modifyTodoDoneStatus } from "../redux";
import { RootState } from "../redux/reducers";
import { ITodo } from "./types";

interface ITodoProps {
  todo: ITodo;
}

const TodoItem = ({ todo }: ITodoProps) => {
  const { loading } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const onCheckChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(modifyTodoDoneStatus({ id: todo.id, done: e.target.checked }));

  const onDeleteClick = () => dispatch(deleteTodo(todo.id));

  return (
    <Card className={`my-3 p-3 ${todo.done && "success-background"}`}>
      <Row>
        <Col xs={1} className="d-flex align-items-center">
          <Form.Check
            type="checkbox"
            disabled={loading}
            className="fs-4"
            checked={todo.done}
            onChange={onCheckChange}
          />
        </Col>
        <Col xs={9}>
          <h6 className="">Gjøremål </h6>
          <div>
            id: <span className="text-muted">{todo.id}</span>
          </div>
          <div>
            Beskrivelse <span className="text-muted">{todo.text}</span>
          </div>
        </Col>

        <Col className="d-flex align-items-center" xs={2}>
          <Button
            variant="secondary"
            onClick={onDeleteClick}
            disabled={loading}
          >
            Slett
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default TodoItem;
