import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function Home() {
  return <h2>Home</h2>;
}
function Product() {
  return <h2>Product</h2>;
}
function Detail() {
  return <h2>Detail</h2>;
}

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}
