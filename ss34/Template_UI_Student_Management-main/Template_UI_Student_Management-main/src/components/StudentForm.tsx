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

  const [errors, setErrors] = React.useState<Record<string, boolean>>({});

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
      setErrors({});
    } else if (student) {
      setForm(student);
      setErrors({});
    }
  }, [student, mode]);

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    if (mode === "view") return;
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = () => {
    const newErrors: Record<string, boolean> = {};
    if (!form.id) newErrors.id = true;
    if (!form.name) newErrors.name = true;
    if (!form.age) newErrors.age = true;
    if (!form.birthday) newErrors.birthday = true;
    if (!form.hometown) newErrors.hometown = true;
    if (!form.address) newErrors.address = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
      setErrors({});
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
          error={!!errors.id}
          placeholder={errors.id ? "Mã sinh viên bắt buộc" : ""}
          InputProps={{
            style: errors.id ? { color: "red" } : {},
          }}
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          disabled={mode === "view"}
          error={!!errors.name}
          placeholder={errors.name ? "Tên sinh viên bắt buộc" : ""}
          InputProps={{
            style: errors.name ? { color: "red" } : {},
          }}
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          fullWidth
          disabled={mode === "view"}
          error={!!errors.age}
          placeholder={errors.age ? "Tuổi bắt buộc" : ""}
          InputProps={{
            style: errors.age ? { color: "red" } : {},
          }}
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
          error={!!errors.birthday}
          placeholder={errors.birthday ? "Ngày sinh bắt buộc" : ""}
          InputProps={{
            style: errors.birthday ? { color: "red" } : {},
          }}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          fullWidth
          disabled={mode === "view"}
          error={!!errors.hometown}
          placeholder={errors.hometown ? "Nơi sinh bắt buộc" : ""}
          InputProps={{
            style: errors.hometown ? { color: "red" } : {},
          }}
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
          disabled={mode === "view"}
          error={!!errors.address}
          placeholder={errors.address ? "Địa chỉ bắt buộc" : ""}
          InputProps={{
            style: errors.address ? { color: "red" } : {},
          }}
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
