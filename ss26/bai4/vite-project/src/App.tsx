import { Routes, Route } from "react-router-dom";
import Student from "./components/Student";

function App() {
  return (
    <Routes>
      <Route path="/student" element={<Student />} />
    </Routes>
  );
}

export default App;
