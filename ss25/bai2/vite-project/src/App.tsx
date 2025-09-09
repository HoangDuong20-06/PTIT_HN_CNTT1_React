import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import "./App.css"

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;