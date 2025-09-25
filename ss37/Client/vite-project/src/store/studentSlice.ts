import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
};

type StudentState = {
  list: Student[];
  loading: boolean;
  error: string | null;
};

const initialState: StudentState = {
  list: [],
  loading: false,
  error: null,
};

const API_URL = "http://localhost:8080/studentList";
export const fetchStudents = createAsyncThunk("students/fetch", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});
export const createStudent = createAsyncThunk(
  "students/create",
  async (student: Omit<Student, "id">, { dispatch }) => {
    await axios.post(API_URL, student);
    dispatch(fetchStudents());
  }
);
export const updateStudent = createAsyncThunk(
  "students/update",
  async (student: Student, { dispatch }) => {
    await axios.put(`${API_URL}/${student.id}`, student);
    dispatch(fetchStudents());
  }
);
export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id: number, { dispatch }) => {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(fetchStudents());
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action: PayloadAction<Student[]>) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchStudents.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch students";
      });
  },
});

export default studentSlice.reducer;
