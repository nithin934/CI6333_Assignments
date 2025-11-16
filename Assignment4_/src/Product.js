import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams(); // Access dynamic part of URL
  return <h2>Product ID: {id}</h2>;
}

export default Product;
