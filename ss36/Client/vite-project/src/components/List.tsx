import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { Task } from "../type";
import { updateTask, deleteTask } from "../store/taskSlice";
import type { AppDispatch } from "../store/Store";

interface ListProps {
  tasks: Task[];
  setEditingTask: (task: Task | null) => void;
}

const List: React.FC<ListProps> = ({ tasks, setEditingTask }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleToggle = (task: Task) => {
    if (!task.id) return;
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const confirmDelete = (id: number) => {
    dispatch(deleteTask(id));
    setDeleteId(null);
  };

  const getPriorityStyle = (priority: Task["priority"]) => {
    switch (priority) {
      case "HIGH":
        return "bg-red-500 text-white";
      case "MEDIUM":
        return "bg-yellow-500 text-white";
      case "LOW":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <div className="mt-4 space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">Không có công việc nào</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between bg-white shadow rounded p-3"
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task)}
                className="h-4 w-4"
              />
              <span
                className={`${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.taskName}
              </span>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityStyle(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => setEditingTask(task)}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                ✏️
              </button>
              <button
                onClick={() => setDeleteId(task.id ?? null)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                🗑️
              </button>
            </div>
          </div>
        ))
      )}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h2 className="text-lg font-semibold">Xác nhận xoá</h2>
              <button
                onClick={() => setDeleteId(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✖
              </button>
            </div>
            <div className="px-4 py-5">
              <p className="text-gray-700">
                Bạn có chắc muốn xoá <span className="font-semibold">task này</span> không?
              </p>
            </div>
            <div className="flex justify-end gap-2 border-t px-4 py-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded border text-sm hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={() => confirmDelete(deleteId)}
                className="px-4 py-2 rounded bg-red-500 text-white text-sm font-medium hover:bg-red-600"
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
