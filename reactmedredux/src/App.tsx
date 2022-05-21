import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import TodosPage from "./komponenter/TodosPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App main-content">
        <TodosPage />
      </div>
    </Provider>
  );
}

export default App;
