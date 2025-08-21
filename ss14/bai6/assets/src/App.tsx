import { useState } from "react";

export default function GenderForm() {
  const [gender, setGender] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Giới tính được chọn:", gender);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <form onSubmit={handleSubmit}>
        <h3>Giới tính:</h3>

        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Nam"
            checked={gender === "Nam"}
            onChange={handleChange}
          />
          <label htmlFor="male">Nam</label>
        </div>

        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Nữ"
            checked={gender === "Nữ"}
            onChange={handleChange}
          />
          <label htmlFor="female">Nữ</label>
        </div>

        <div>
          <input
            type="radio"
            id="other"
            name="gender"
            value="Khác"
            checked={gender === "Khác"}
            onChange={handleChange}
          />
          <label htmlFor="other">Khác</label>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
      </form>
    </div>
  );
}
