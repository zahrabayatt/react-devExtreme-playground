import { DataGrid } from "devextreme-react";
import { Paging, Editing, Column } from "devextreme-react/cjs/data-grid";
import CustomStore from "devextreme/data/custom_store";

const TaskDataGrid = () => {
  const taskStore = new CustomStore({
    key: "id",
    load: () =>
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .catch((error) => {
          throw new Error("Data loading error");
        }),

    insert: (values) =>
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then((response) => response.json()),

    update: (key, values) =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${key}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then((response) => response.json()),

    remove: (key) =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${key}`, {
        method: "DELETE",
      }).then((response) => response.json()),
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>
      <DataGrid
        dataSource={taskStore}
        showBorders={true}
        remoteOperations={true}
      >
        <Paging defaultPageSize={10} />
        <Editing
          mode="popup"
          allowAdding={true}
          allowUpdating={true}
          allowDeleting={true}
        />
        <Column dataField="id" caption="ID" width={50} />
        <Column dataField="title" caption="Title" />
        <Column dataField="completed" caption="Completed" dataType="boolean" />
      </DataGrid>
    </div>
  );
};

export default TaskDataGrid;
