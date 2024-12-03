import { List } from "devextreme-react";
import { products } from "../data/product";

const ProductList = () => {
  return (
    <List
      dataSource={products}
      displayExpr={(d) => `${d.Name} - ${d.Category}`}
    ></List>
  );
};

export default ProductList;
