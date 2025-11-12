import React, { useState, useMemo } from "react";

const ProductList = ({ products, searchTerm }) => {
  console.log("ProductList re-rendered");

  // useMemo caches the filtered results until dependencies change
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <ul>
      {filteredProducts.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const UseMemo = () => {
  const [searchTerm1Parent, setSearchTerm] = useState("");
  const [count,setCount] = useState(0);

  // Example static list of products
  const products1 = useMemo(() =>[
    { id: 1, name: "Apple iPhone" },
    { id: 2, name: "Samsung Galaxy" },
    { id: 3, name: "Google Pixel" },
    { id: 4, name: "OnePlus Nord" },
  ],[]);

  console.log("Parent re-rendered");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product Search (useMemo Example)</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm1Parent}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "6px", marginBottom: "10px", width: "200px" }}
      />
      <hr></hr>
    <button onClick={() => setCount(count+1)}>Increment Button({count})</button>
      <ProductList products={products1} searchTerm={searchTerm1Parent} />
    </div>
  );
};

export default UseMemo;
