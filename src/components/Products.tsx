import { List } from "devextreme-react";
import React from "react";
import { products } from "../data/product";

const Products = () => {
  return (
    <List
      dataSource={products}
      displayExpr={(d) => `${d.Name} - ${d.Category}`}
    ></List>
  );
};

export default Products;
