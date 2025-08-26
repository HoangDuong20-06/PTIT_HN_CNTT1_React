import { useState } from "react";
import "./App.css"
function Toggle() {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleToggle}>
        {visible ? "Ẩn" : "Hiện"}
      </button>
      {visible && <h2>Tiêu đề văn bản</h2>}
    </div>
  );
}
export default Toggle;
