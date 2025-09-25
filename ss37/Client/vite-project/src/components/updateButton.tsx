import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStudent } from "../store/studentSlice";
import type { Student } from "../store/studentSlice";
import type { AppDispatch } from "../store/Store";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export default function UpdateButton({ student }: { student: Student }) {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Student>(student);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    dispatch(updateStudent(form));
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setForm(student);
          setOpen(true);
        }}
      >
        ✏️
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Cập nhật học sinh</DialogTitle>
        <DialogContent className="flex flex-col gap-4 mt-2">
          <TextField
            label="Tên"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tuổi"
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Lớp"
            name="grade"
            value={form.grade}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Hủy</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
