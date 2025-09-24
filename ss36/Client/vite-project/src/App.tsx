import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store/Store";
import { fetchTasks } from "./store/taskSlice";
import AddBar from "./components/addBar";
import ToolBar from "./components/toolBar";
import List from "./components/List";
import type { Task } from "./type";
import "./App.css";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.tasks
  );
  const [filter, setFilter] = useState({
    status: "ALL",
    priority: "ALL",
    keyword: "",
  });
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = items.filter((task) => {
    const matchStatus =
      filter.status === "ALL" ||
      (filter.status === "DONE" && task.completed) ||
      (filter.status === "TODO" && !task.completed);
    const matchPriority =
      filter.priority === "ALL" || task.priority === filter.priority;
    const matchKeyword = task.taskName
      .toLowerCase()
      .includes(filter.keyword.toLowerCase());

    return matchStatus && matchPriority && matchKeyword;
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">📝 Task Manager</h1>
      <AddBar editingTask={editingTask} setEditingTask={setEditingTask} />
      <ToolBar
        onFilter={(status, priority, keyword) =>
          setFilter({ status, priority, keyword })
        }
      />
      {loading && <p className="text-blue-500">Đang tải dữ liệu...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <List tasks={filteredTasks} setEditingTask={setEditingTask} />
    </div>
  );
}
