import "./App.css";
import { Hjemmeside } from "./sider/hjemmeside";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Hjemmeside />
      </div><div>
    </Provider>
  );
}

export default App;
