import "./App.scss";
import { Provider } from "./provider";
import { RouterConfig } from "./route";

function App() {
  return (
    <Provider>
      <RouterConfig />
    </Provider>
  );
}

export default App;
