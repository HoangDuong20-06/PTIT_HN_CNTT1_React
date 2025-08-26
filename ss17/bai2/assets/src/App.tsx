import "./App.css";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function App() {
  const [product] = useState<Product>({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10,
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Thông tin sản phẩm</h2>
      <p><b>Id:</b> {product.id}</p>
      <p><b>Name:</b> {product.name}</p>
      <p><b>Price:</b> {product.price} $</p>
      <p><b>Quantity:</b> {product.quantity}</p>
    </div>
  );
}

export default App;
