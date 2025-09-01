import React, { useState } from "react";
import Modal from "./components/Modal";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ứng dụng React với Modal và Focus Input</h1>
      <button
        style={{
          padding: "10px 20px",
          background: "green",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(true)}
      >
        Mở Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default App;
