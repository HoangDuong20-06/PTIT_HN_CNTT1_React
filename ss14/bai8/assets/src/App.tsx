import { useState } from "react";
import "./App.css";

type User = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [form, setForm] = useState<User>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validate rỗng
    if (!form.email || !form.password) {
      setError("Email và Mật khẩu không được để trống");
      setSuccess("");
      return;
    }

    // ép kiểu về mảng User
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const matchedUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (matchedUser) {
      setSuccess("Đăng nhập thành công!");
      setError("");
    } else {
      setError("Đăng nhập thất bại: Sai Email hoặc Mật khẩu");
      setSuccess("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Đăng nhập tài khoản</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
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

        <button type="submit" style={{ marginTop: "10px" }}>
          Đăng nhập
        </button>
      </form>

      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontStyle: "italic",
        }}
      >
        Form đăng nhập tài khoản
      </p>
    </div>
  );
}
