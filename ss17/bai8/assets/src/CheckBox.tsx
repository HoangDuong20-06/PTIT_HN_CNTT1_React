import React, { useState } from "react";
import "./App.css"
function CheckboxGroup() {
   const [hobbies, setHobbies] = useState<string[]>([]);
  const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (hobbies.includes(value)) {
      setHobbies(hobbies.filter((h) => h !== value));
    } else {
      setHobbies([...hobbies, value]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <p>Sở thích: {JSON.stringify(hobbies)}</p>
      {options.map((opt, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={opt}
              checked={hobbies.includes(opt)}
              onChange={handleChange}
            />
            {opt}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CheckboxGroup;
