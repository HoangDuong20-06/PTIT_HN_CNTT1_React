import React, { useState } from "react";
import "./App.css"
function SelectCity() {
  const [city, setCity] = useState("");
  const cities = [
    "-- Chọn thành phố --",
    "Hà Nội",
    "Hà Nam",
    "Ninh Bình",
    "Thanh Hóa",
    "Nghệ An",
  ];
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <label htmlFor="city">Thành phố: </label>
      <select id="city" value={city} onChange={handleChange}>
        {cities.map((c, index) => (
          <option key={index} value={c === "-- Chọn thành phố --" ? "" : c}>
            {c}
          </option>
        ))}
      </select>
      {city && (
        <p style={{ marginTop: "20px" }}>
          Thành phố được chọn: <b>{city}</b>
        </p>
      )}
    </div>
  );
}

export default SelectCity;
