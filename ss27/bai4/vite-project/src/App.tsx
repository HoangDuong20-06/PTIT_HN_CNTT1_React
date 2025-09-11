import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./components/ProductList ";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
}
