import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  category: number;
};

type BookState = {
  list: Book[];
  loading: boolean;
  error: string | null;
};

const initialState: BookState = {
  list: [],
  loading: false,
  error: null,
};

const API_URL = "http://localhost:8080/bookList";
export const fetchBooks = createAsyncThunk("books/fetch", async () => {
  const res = await axios.get<Book[]>(API_URL);
  return res.data.map((b) => ({
    ...b,
    year: Number(b.year),
    category: Number(b.category),
  }));
});

export const createBook = createAsyncThunk(
  "books/create",
  async (book: Omit<Book, "id">, { dispatch }) => {
    const payload = {
      ...book,
      year: Number(book.year),
      category: Number(book.category),
    };
    await axios.post(API_URL, payload);
    dispatch(fetchBooks());
  }
);

export const updateBook = createAsyncThunk(
  "book/update",
  async (book: Book, { dispatch }) => {
    const payload = {
      ...book,
      year: Number(book.year),
      category: Number(book.category),
    };
    await axios.put(`${API_URL}/${book.id}`, payload);
    dispatch(fetchBooks());
  }
);

export const deleteBook = createAsyncThunk(
  "book/delete",
  async (id: number, { dispatch }) => {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(fetchBooks());
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<Book[]>) => {
          state.loading = false;
          state.list = action.payload;
        }
      )
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch books";
      });
  },
});

export default bookSlice.reducer;
