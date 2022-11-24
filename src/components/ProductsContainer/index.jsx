import React from "react";
import { useContext } from "react";
import Product from "../Product";
import s from "./index.module.css";
import { Context } from "../../contex";

export default function ProductsContainer() {
  const { products } = useContext(Context);
  return (
    <div className={s.products_container}>
      {products.map((el) => (
        <Product {...el} key={el.id} />
      ))}
    </div>
  );
}
