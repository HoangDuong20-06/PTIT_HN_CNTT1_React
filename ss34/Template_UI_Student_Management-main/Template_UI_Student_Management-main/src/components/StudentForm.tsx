import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";
import React from "react";
import type { Student } from "../utils/types";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  student?: Student | null;
  mode?: "add" | "edit" | "view";
}

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({
  onSubmit,
  student,
  mode = "add",
}) => {
  const [form, setForm] = React.useState<Student>({
    id: "",
    name: "",
    age: 0,
    gender: "Nam",
    birthday: "",
    hometown: "",
    address: "",
  });
  React.useEffect(() => {
    if (mode === "add") {
      setForm({
        id: "",
        name: "",
        age: 0,
        gender: "Nam",
        birthday: "",
        hometown: "",
        address: "",
      });
    } else if (student) {
      setForm(student);
    }
  }, [student, mode]);

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    if (mode === "view") return; 
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = () => {
    if (!form.id || !form.name) return;
    onSubmit(form);
    if (mode === "add") {
      setForm({
        id: "",
        name: "",
        age: 0,
        gender: "Nam",
        birthday: "",
        hometown: "",
        address: "",
      });
    }
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        {mode === "view"
          ? "Xem thông tin sinh viên"
          : mode === "edit"
          ? "Cập nhật sinh viên"
          : "Thêm sinh viên"}
      </h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={form.id}
          onChange={handleChange}
          fullWidth
          disabled={mode !== "add"}
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          disabled={mode === "view"}
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          fullWidth
          disabled={mode === "view"}
        />
        <Select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          fullWidth
          disabled={mode === "view"}
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          disabled={mode === "view"}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          fullWidth
          disabled={mode === "view"}
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
          disabled={mode === "view"}
        />
        {mode !== "view" && (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {mode === "edit" ? "Cập nhật" : "Thêm mới"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
