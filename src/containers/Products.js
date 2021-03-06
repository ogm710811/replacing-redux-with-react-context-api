import React, { useContext, useEffect } from "react";
import "./Products.css";
import { ProductsContext } from "../context/products-context";
import ProductItem from "../components/Products/ProductItem";

const Products = (props) => {
  const productList = useContext(ProductsContext).products;
  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
