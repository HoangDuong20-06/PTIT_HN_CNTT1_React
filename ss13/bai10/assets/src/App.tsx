import './App.css'

import { useState } from "react";
export default function Input() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h2>Dữ liệu: {value}</h2>
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder="Nhập dữ liệu..." 
      />
    </div>
  );
}
