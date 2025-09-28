import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../store/bookSlice";
import type { Book } from "../store/bookSlice";
import type { AppDispatch } from "../store/store";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

const categoryMap: Record<number, string> = {
    1: "Science",
    2: "History",
    3: "Novel",
};

export default function UpdateButton({ book }: { book: Book }) {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Book>(book);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]:
      name === "year" || name === "category" ? Number(value) : value,
  }));
};
  const handleSave = () => {
    console.log("Saving book:", form);
    dispatch(updateBook(form));
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setForm(book);
          setOpen(true);
        }}
      >
        ✏️
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Cập nhật sách</DialogTitle>
        <DialogContent className="flex flex-col gap-4 mt-2">
          <TextField
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Author"
            name="author"
            value={form.author}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Year"
            name="year"
            type="number"
            value={form.year}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            select
            label="Category"
            name="category"
            value={form.category} 
            onChange={handleChange}
            fullWidth
          >
             {Object.entries(categoryMap).map(([key, label]) => (
    <MenuItem key={key} value={Number(key)}>
      {label}
    </MenuItem>
  ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
