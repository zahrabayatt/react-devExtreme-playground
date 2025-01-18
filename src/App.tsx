import "devextreme/dist/css/dx.light.css";
import "./App.css";
import Tools from "./components/tools/Tools";

function App() {
  // Example configuration for the Tools component
  const toolConfig = {
    mainButton: {
      icon: "menu",
      width: 30,
      height: 30,
    },
    options: [
      {
        icon: "doc",
        width: 30,
        height: 30,
        onClick: () => alert("Document clicked!"),
      },
      {
        icon: "image",
        width: 30,
        height: 30,
        onClick: () => alert("Document clicked!"),
      },
      {
        icon: "folder",
        width: 30,
        height: 30,
        options: [
          {
            icon: "doc",
            width: 30,
            height: 30,
            onClick: () => alert("Document clicked!"),
          },
          {
            icon: "image",
            width: 30,
            height: 30,
            options: [
              {
                icon: "photo",
                width: 30,
                height: 30,
                onClick: () => alert("Photo clicked!"),
              },
              {
                icon: "coffee",
                width: 30,
                height: 30,
                onClick: () => alert("Gallery clicked!"),
              },
            ],
          },
        ],
      },
      {
        icon: "share",
        width: 30,
        height: 30,
        onClick: () => alert("share clicked!"),
      },
      {
        icon: "edit",
        width: 30,
        height: 30,
        options: [
          {
            icon: "datapie",
            width: 30,
            height: 30,
            onClick: () => alert("Datapie clicked!"),
            options: [
              {
                icon: "datapie",
                width: 30,
                height: 30,
              },
            ],
          },
          {
            icon: "isnotblank",
            width: 30,
            height: 30,
            onClick: () => alert("recycle clicked!"),
            options: [
              {
                icon: "isnotblank",
                width: 30,
                height: 30,
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
