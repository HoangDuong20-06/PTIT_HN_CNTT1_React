import axios from "axios";

export interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

const API_URL = "http://localhost:8080/student";

export const getAllStudents = async (): Promise<Student[]> => {
  try {
    const res = await axios.get<Student[]>(API_URL);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi gọi API:", err);
    return [];
  }
};

export const getStudentById = async (id: number): Promise<Student | null> => {
  try {
    const res = await axios.get<Student>(`${API_URL}/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Không tìm thấy sinh viên với id=${id}`, err);
    return null;
  }
};
export const createStudent = async (
  student: Omit<Student, "id" | "created_at">
): Promise<Student | null> => {
  try {
    const students = await getAllStudents();
    const maxId = students.length > 0 ? Math.max(...students.map((s) => s.id)) : 0;

    const newStudent: Student = {
      ...student,
      id: maxId + 1,  // id tự sinh
      created_at: new Date().toISOString(), // ngày tạo
    };

    const res = await axios.post<Student>(API_URL, newStudent);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi thêm sinh viên:", err);
    return null;
  }
};
