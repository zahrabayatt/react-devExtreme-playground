import "devextreme/dist/css/dx.light.css";
import "./App.css";
import Tools, { ToolsRef } from "./components/tools/Tools";
import { Button } from "devextreme-react";
import { useRef } from "react";

function App() {
  const toolsRef = useRef<ToolsRef>(null);

  const handleReset = () => {
    if (toolsRef.current) {
      toolsRef.current.reset(); // Call the reset function
    }
  };

  const toolConfig = {
    mainButton: {
      icon: "menu",
      width: 30,
      height: 30,
    },
    options: [
      {
        icon: "folder",
        width: 30,
        height: 30,
        options: [
          {
            icon: "file",
            width: 30,
            height: 30,
            onClick: () => {
              console.log("File clicked");
            },
          },
          {
            icon: "trash",
            width: 30,
            height: 30,
            onClick: () => {
              console.log("trash clicked");
            },
          },
        ],
      },
      {
        icon: "save",
        width: 30,
        height: 30,
        onClick: () => {
          console.log("Save clicked");
        },
      },
    ],
  };

  return (
    <div>
      <Tools config={toolConfig} ref={toolsRef} />
      <Button text="Reset Tools" onClick={handleReset} />
    </div>
  );
}

export default App;
