import { useState } from "react";
import "./App.css"
function CounText() {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Nhập nội dung..."
        rows={4}
        cols={40}
        style={{
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

export default CounText;
