import { Button, Row, Col, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { todosActionCreator } from "../redux";
import { RootState } from "../redux/reducers";
import { ITodo } from "./types";

interface ITodoProps {
  todo: ITodo;
}

const TodoItem = ({ todo }: ITodoProps) => {
  const { loading } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();
  const { deleteTodo, modifyTodoDoneStatus } = bindActionCreators(
    todosActionCreator,
    dispatch
  );

  return (
    <Card className={`my-3 p-3 ${todo.done && "success-background"}`}>
      <Row>
        <Col xs={1} className="d-flex align-items-center">
          <Form.Check
            type="checkbox"
            disabled={loading}
            className="fs-4"
            checked={todo.done}
            onChange={(e) =>
              modifyTodoDoneStatus({ id: todo.id, done: e.target.checked })
            }
          />
        </Col>
        <Col xs={10}>
          <h6 className="">Gjøremål </h6>
          <div>
            id: <span className="text-muted">{todo.id}</span>
          </div>
          <div>
            Beskrivelse <span className="text-muted">{todo.text}</span>
          </div>
        </Col>

        <Col className="d-flex align-items-center" xs={1}>
          <Button
            variant="secondary"
            onClick={() => deleteTodo(todo.id)}
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
