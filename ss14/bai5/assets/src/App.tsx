import { useState } from "react";
import "./App.css";
export default function ProductForm() {
  const [product, setProduct] = useState({
    productCode: "",
    productName: "",
    price: 0,
    quantity: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h3>Thêm mới sản phẩm</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mã sản phẩm</label>
          <input
            type="text"
            name="productCode"
            value={product.productCode}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tên sản phẩm</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Giá</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Số lượng</label>
          <select
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          >
            <option value={0}>Chọn số lượng</option>
            {[1,2,3,4,5,10,20].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}
