import "devextreme/dist/css/dx.light.css";
import "./App.css";
import { List } from "devextreme-react/list";
import { products } from "./data/product";

function App() {
  return (
    <div className="App">
      <List
        dataSource={products}
        displayExpr={(d) => `${d.Name} - ${d.Category}`}
      ></List>
    </div>
  );
}

export default App;
