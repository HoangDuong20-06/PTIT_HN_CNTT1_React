import { Routes, Route } from "react-router-dom";
import Student from "./components/Student";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </div>
  );
}
