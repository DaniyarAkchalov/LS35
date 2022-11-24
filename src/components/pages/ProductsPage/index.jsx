import React from "react";
import ProductsContainer from "../../ProductsContainer";
import AddProductForm from "../../AddProductForm";

export default function ProductsPage() {
  return (
    <div>
      <AddProductForm/>
      <h2>Products:</h2>
      <ProductsContainer />
    </div>
  );
}
