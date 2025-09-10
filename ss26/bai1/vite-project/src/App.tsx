import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/user/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
