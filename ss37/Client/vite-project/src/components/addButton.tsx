import { useState } from "react";
import { useDispatch } from "react-redux";
import { createStudent } from "../store/studentSlice";
import type { AppDispatch } from "../store/Store";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

export default function AddButton() {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [grade, setGrade] = useState("CNTT1");

  const handleSubmit = () => {
    if (!name || !age) return;

    dispatch(
      createStudent({
        name,
        age: Number(age),
        grade,
      })
    );

    setOpen(false);
    setName("");
    setAge("");
    setGrade("CNTT1");
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        className="mb-4"
      >
        ADD STUDENT
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Thêm học sinh mới</DialogTitle>
        <DialogContent className="flex flex-col gap-4 mt-2">
          <TextField
            label="Tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Tuổi"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            fullWidth
          />
          <TextField
            select
            label="Lớp"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
          >
            <MenuItem value="CNTT1">CNTT1</MenuItem>
            <MenuItem value="CNTT2">CNTT2</MenuItem>
            <MenuItem value="CNTT3">CNTT3</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Hủy</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
