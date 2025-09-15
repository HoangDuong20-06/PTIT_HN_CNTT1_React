import { useEffect, useState } from "react";
import { getAllProduct } from "./components/api";
import type { Product } from "./components/api";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProduct().then((data) => {
      console.log("Danh sách sản phẩm:", data);
      setProducts(data);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: "20px" }}>
            <img src={p.image} alt={p.product_name} width="120" />
            <h3>{p.product_name}</h3>
            <p>Giá: ${p.price}</p>
            <p>Số lượng: {p.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
