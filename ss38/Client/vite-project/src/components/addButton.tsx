import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../store/bookSlice";
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

const categoryOptions = [
  { value: 1, label: "Science" },
  { value: 2, label: "History" },
  { value: 3, label: "Novel" },
];

export default function AddButton() {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState<string>("");
  const [category, setCategory] = useState<number>(1);

  const handleSubmit = () => {
    if (!title || !year) return;
    const parsedYear = Number(year);
    if (isNaN(parsedYear)) return;

    dispatch(
      createBook({
        title,
        author,
        year: parsedYear,
        category,
      })
    );

    setOpen(false);
    setTitle("");
    setAuthor("");
    setYear("");
    setCategory(1);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        className="mb-4"
      >
        ADD BOOK
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Book</DialogTitle>
        <DialogContent className="flex flex-col gap-4 mt-2">
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
          />
          <TextField
            label="Year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            fullWidth
          />
          <TextField
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(Number(e.target.value))}
            fullWidth
          >
            {categoryOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
