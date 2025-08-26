import { useState } from "react";
import "./App.css"
function Form() {
  const [value, setValue] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={value}
        onChange={handleChange}
        style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <p>{value}</p>
    </div>
  );
}

export default Form;
