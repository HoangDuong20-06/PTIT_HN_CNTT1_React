import React, { useState } from 'react';
import './App.css';

const SimpleForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = 'Trường này là bắt buộc';
    }

    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = 'Trường này là bắt buộc';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      alert('Gửi thành công!');
      setName('');
      setEmail('');
      setErrors({});
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>📄 Đăng ký thông tin</h3>

      <div className="form-group">
        <label>Họ tên</label><br />
        <input
          type="text"
          placeholder="Nhập họ tên..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        {errors.name && <p className="form-error">⚠ {errors.name}</p>}
      </div>

      <div className="form-group">
        <label>Email</label><br />
        <input
          type="text"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        {errors.email && <p className="form-error">⚠ {errors.email}</p>}
      </div>

      <button type="submit" className="form-button">
        Gửi
      </button>
    </form>
  );
};

export default SimpleForm;
