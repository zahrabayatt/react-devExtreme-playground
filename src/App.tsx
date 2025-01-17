import "devextreme/dist/css/dx.light.css";
import "./App.css";
import Tools from "./components/tools/Tools";

function App() {
  const toolConfig = {
    mainButton: {
      icon: "menu",
      width: 40,
      height: 40,
    },
    options: [
      {
        icon: "save",
        width: 40,
        height: 40,
        onClick: () => alert("Save clicked!"),
      },
      {
        icon: "edit",
        width: 40,
        height: 40,
        onClick: () => alert("Edit clicked!"),
      },
      {
        icon: "trash",
        width: 40,
        height: 40,
        onClick: () => alert("Delete clicked!"),
      },
    ],
  };

  return (
    <div>
      <Tools config={toolConfig} />
    </div>
  );
}

export default App;
