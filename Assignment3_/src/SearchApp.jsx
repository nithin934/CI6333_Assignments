import React, { useState, useRef } from "react";

const SearchApp = () => {
  
  const products = [
    "Apple iPhone 15",
    "Samsung Galaxy S24",
    "Google Pixel 9",
    "OnePlus 12",
    "Sony Xperia 5",
    "Nokia G42",
    "Xiaomi 14 Pro",
    "Motorola Edge 50",
    "Realme GT 6",
    "Asus Zenfone 10",
  ];

  // useState for UI-controlled data
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [message, setMessage] = useState("");

  // useRef for tracking how many searches the user has done
  const searchCount = useRef(0);

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setQuery(keyword);

    if (keyword.trim() !== "") {
      // increment silent counter
      searchCount.current += 1;
      console.log("Search count:", searchCount.current);

      // filter static data
      const results = products.filter((item) =>
        item.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredResults(results);

      // update message if limit exceeded
      if (searchCount.current > 10) {
        setMessage("You have exceeded your search limit!");
      } else {
        setMessage("You can only search with less than 10 characters");
      }
    } else {
      setFilteredResults([]);
      setMessage("");
    }
  };

  const resetSearch = () => {
    searchCount.current = 0; // reset counter
    setQuery("");
    setFilteredResults([]);
    setMessage("Search reset successfully!");
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "500px",
      }}
    >
      <h2>Product Search</h2>

      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a product..."
        style={{
          padding: "8px",
          width: "70%",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <button
        onClick={resetSearch}
        style={{
          marginLeft: "10px",
          padding: "8px 12px",
          background: "#ff6b6b",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>

      {/* message area */}
      <p
        style={{
          marginTop: "15px",
          fontWeight: "bold",
          color:
            searchCount.current > 10
              ? "red"
              : message.includes("reset")
              ? "green"
              : "black",
        }}
      >
        {message}
      </p>

      {/* Search results */}
      {filteredResults.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            marginTop: "10px",
            padding: 0,
            borderTop: "1px solid #ddd",
          }}
        >
          {filteredResults.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* When no results */}
      {query && filteredResults.length === 0 && (
        <p style={{ color: "gray" }}>No products found.</p>
      )}
    </div>
  );
};

export default SearchApp;
