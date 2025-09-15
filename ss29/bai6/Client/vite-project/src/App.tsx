import { useEffect, useState } from "react";
import { getAllStudents, getStudentById, createStudent } from "./components/api";
import type { Student } from "./components/api";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchId, setSearchId] = useState<string>("");
  const [foundStudent, setFoundStudent] = useState<Student | null>(null);
  const [newStudent, setNewStudent] = useState({
    student_name: "",
    email: "",
    address: "",
    phone: "",
    status: true,
    created_at: new Date().toISOString(),
  });

  useEffect(() => {
    getAllStudents().then((data) => setStudents(data));
  }, []);

  const handleSearch = async () => {
    if (!searchId) return;
    const student = await getStudentById(Number(searchId));
    if (student) {
      console.log("Thông tin sinh viên:", student);
      setFoundStudent(student);
    } else {
      alert("Không tìm thấy bản ghi");
      setFoundStudent(null);
    }
  };

  const handleCreate = async () => {
    const student = await createStudent(newStudent);
    if (student) {
      console.log("Đã thêm sinh viên:", student);
      setStudents([...students, student]); 
      setNewStudent({
        student_name: "",
        email: "",
        address: "",
        phone: "",
        status: true,
        created_at: new Date().toISOString(),
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách sinh viên</h1>
      <div style={{ marginBottom: "20px" }}>
        <h3>Thêm sinh viên mới</h3>
        <input
          type="text"
          placeholder="Tên sinh viên"
          value={newStudent.student_name}
          onChange={(e) => setNewStudent({ ...newStudent, student_name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Địa chỉ"
          value={newStudent.address}
          onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="SĐT"
          value={newStudent.phone}
          onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
        />
        <select
          value={newStudent.status ? "true" : "false"}
          onChange={(e) => setNewStudent({ ...newStudent, status: e.target.value === "true" })}
        >
          <option value="true">Hoạt động</option>
          <option value="false">Ngưng</option>
        </select>
        <button onClick={handleCreate}>Thêm</button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Nhập ID sinh viên"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Tìm</button>
      </div>

      {foundStudent && (
        <div style={{ marginBottom: "20px" }}>
          <h3>Thông tin sinh viên tìm thấy:</h3>
          <p><b>ID:</b> {foundStudent.id}</p>
          <p><b>Tên:</b> {foundStudent.student_name}</p>
          <p><b>Email:</b> {foundStudent.email}</p>
          <p><b>Địa chỉ:</b> {foundStudent.address}</p>
          <p><b>SĐT:</b> {foundStudent.phone}</p>
          <p><b>Trạng thái:</b> {foundStudent.status ? "Hoạt động" : "Ngưng"}</p>
          <p><b>Ngày thêm:</b> {new Date(foundStudent.created_at).toLocaleString()}</p>
        </div>
      )}
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
