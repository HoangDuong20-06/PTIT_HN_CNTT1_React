import { useEffect, useState } from "react";
import { getAllStudents } from "./components/api";
import type { Student } from "./components/api";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    getAllStudents().then((data) => {
      console.log("Danh sách sinh viên:", data);
      setStudents(data);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách sinh viên</h1>
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>SĐT</th>
            <th>Trạng thái</th>
            <th>Ngày thêm</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.student_name}</td>
              <td>{s.email}</td>
              <td>{s.address}</td>
              <td>{s.phone}</td>
              <td>{s.status ? "Hoạt động" : "Ngưng"}</td>
              <td>{new Date(s.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
