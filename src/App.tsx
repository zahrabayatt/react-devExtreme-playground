import { Popover } from "devextreme-react/popover";
import "devextreme/dist/css/dx.light.css";
import { products } from "./data/product";
import { TagBox } from "devextreme-react";
import "./App.css";
import HoverTagPopover from "./components/HoverTagPopover";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <HoverTagPopover title="Hello" id="1" />
      <HoverTagPopover title="Hello 2" id="2" />
      <HoverTagPopover title="Hello 3" id="3" />
      <HoverTagPopover title="Hello 4" id="4" />
    </div>
  );
}

export default App;
