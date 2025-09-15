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
