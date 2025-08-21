import { useState, useRef } from "react";
import "./App.css";

type User = {
  studentName: string;
  email: string;
  password: string;
  address: string;
};

export default function RegisterForm() {
  const [form, setForm] = useState<User>({
    studentName: "",
    email: "",
    password: "",
    address: "",
  });

  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.studentName || !form.email || !form.password) {
      setError("Tên sinh viên, Email và Mật khẩu không được để trống");
      return;
    }
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const isExist = users.some((u) => u.email === form.email);
    if (isExist) {
      setError("Email không được phép trùng");
      return;
    }

    setError("");
    const newUsers = [...users, form];
    localStorage.setItem("users", JSON.stringify(newUsers));

    alert("Đăng ký tài khoản thành công!");

    setForm({
      studentName: "",
      email: "",
      password: "",
      address: "",
    });

    inputRef.current?.focus();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Đăng ký tài khoản</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên sinh viên</label>
          <input
            ref={inputRef}
            type="text"
            name="studentName"
            value={form.studentName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Đăng ký
        </button>
      </form>
    </div>
  );
}
