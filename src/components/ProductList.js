import React from "react";

function ProductList(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.product_id}</td>
        <td>{props.product_name}</td>
        <td>{props.price}</td>
        <td>{props.discount}</td>
        <td>{props.category}</td>
      </tr>
    </React.Fragment>
  );
}
export default ProductList;
