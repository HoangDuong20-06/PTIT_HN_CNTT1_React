import { useState } from "react";
import "./App.css"
function ChangeColor() {
  const [color, setColor] = useState("black");

  const handleChangeColor = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}

export default ChangeColor;
