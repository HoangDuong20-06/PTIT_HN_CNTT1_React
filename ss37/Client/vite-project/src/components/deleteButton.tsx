import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../store/studentSlice";
import type { AppDispatch } from "../store/Store";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function DeleteButton({ id }: { id: number }) {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteStudent(id));
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
      >
        🗑️
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Xóa học sinh</DialogTitle>
        <DialogContent>
          Bạn có chắc chắn muốn xóa học sinh này không?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Hủy</Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
