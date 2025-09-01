import React, { useState } from "react";
import Timer from "./components/Timer";

const App: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          background: show ? "#e74c3c" : "#2ecc71",
          color: "#fff",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        onClick={() => setShow(!show)}
      >
        {show ? "Ẩn Timer" : "Hiện Timer"}
      </button>

      {show && <Timer />}
    </div>
  );
};

export default App;
