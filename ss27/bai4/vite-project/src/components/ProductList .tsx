import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "./Products";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  
  const [inputValue, setInputValue] = useState(searchQuery);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setSearchParams({ search: inputValue });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập tên sản phẩm..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} style={{ margin: "10px 0" }}>
            <strong>{product.name}</strong> - ${product.price}
            <br />
            <span>{product.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
