import "devextreme/dist/css/dx.light.css";
import "./App.css";
import Tools from "./components/tools/Tools";

function App() {
  // Example configuration for the Tools component
  const toolConfig = {
    mainButton: {
      icon: "menu",
      width: 40,
      height: 40,
    },
    options: [
      {
        icon: "folder",
        width: 40,
        height: 40,
        options: [
          {
            icon: "doc",
            width: 40,
            height: 40,
            onClick: () => alert("Document clicked!"),
          },
          {
            icon: "image",
            width: 40,
            height: 40,
            options: [
              {
                icon: "photo",
                width: 40,
                height: 40,
                onClick: () => alert("Photo clicked!"),
              },
              {
                icon: "coffee",
                width: 40,
                height: 40,
                onClick: () => alert("Gallery clicked!"),
              },
            ],
          },
        ],
      },
      {
        icon: "share",
        width: 40,
        height: 40,
        onClick: () => alert("share clicked!"),
      },
      {
        icon: "edit",
        width: 40,
        height: 40,
        options: [
          {
            icon: "datapie",
            width: 40,
            height: 40,
            onClick: () => alert("Datapie clicked!"),
            options: [
              {
                icon: "datapie",
                width: 40,
                height: 40,
              },
            ],
          },
          {
            icon: "isnotblank",
            width: 40,
            height: 40,
            onClick: () => alert("recycle clicked!"),
            options: [
              {
                icon: "isnotblank",
                width: 40,
                height: 40,
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="App">
      <h1>Tools Component Example</h1>
      <Tools config={toolConfig} />
    </div>
  );
}

export default App;
