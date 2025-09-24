import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
import type { Task } from "../type";

const API_URL = "http://localhost:8080/TodoList";
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get<Task[]>(API_URL);
  return response.data;
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task: Omit<Task, "id">) => {
    const res = await fetch("http://localhost:8080/TodoList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return (await res.json()) as Task;
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task: Task) => {
    if (!task.id) throw new Error("Task ID is required for update");
    const response = await axios.put<Task>(`${API_URL}/${task.id}`, task);
    return response.data;
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: number) => {
    if (!id) throw new Error("Task ID is required for delete");
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);
interface TaskState {
  items: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  items: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTasks.fulfilled,
        (state, action: PayloadAction<Task[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tasks";
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.items.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.items.findIndex(
          (t) => t.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(
        deleteTask.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.items = state.items.filter((t) => t.id !== action.payload);
        }
      );
  },
});

export default taskSlice.reducer;
