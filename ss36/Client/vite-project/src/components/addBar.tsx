import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../store/taskSlice";
import type { AppDispatch } from "../store/Store";
import type { Task, Priority } from "../type";

interface AddBarProps {
  editingTask: Task | null;
  setEditingTask: (task: Task | null) => void;
}

const AddBar: React.FC<AddBarProps> = ({ editingTask, setEditingTask }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState<Priority>("HIGH");

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.taskName);
      setPriority(editingTask.priority);
    } else {
      setTaskName("");
      setPriority("HIGH");
    }
  }, [editingTask]);

  const handleSubmit = () => {
    
    if (!taskName.trim()) return;

    if (editingTask) {
      dispatch(updateTask({ ...editingTask, taskName, priority }));
      setEditingTask(null);
    } else {
      dispatch(
        addTask({
          taskName,
          completed: false,
          priority,
        })
      );
    }
    setTaskName("");
    setPriority("HIGH");
  };

  return (
    <div className="flex items-center gap-2 bg-gray-50 p-3 shadow-sm rounded mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Công việc mới"
        className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="HIGH">Cao</option>
        <option value="MEDIUM">Trung bình</option>
        <option value="LOW">Thấp</option>
      </select>
      <button
        onClick={handleSubmit}
        className={`px-4 py-2 text-white rounded text-sm font-medium ${
          editingTask
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {editingTask ? "Cập nhật" : "Thêm"}
      </button>
    </div>
  );
};

export default AddBar;