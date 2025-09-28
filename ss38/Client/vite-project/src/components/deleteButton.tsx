import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/bookSlice";
import type { AppDispatch } from "../store/store";
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
    dispatch(deleteBook(id));
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
        <DialogTitle>Delete Book</DialogTitle>
        <DialogContent>
          Are you sure to delete this book ?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
