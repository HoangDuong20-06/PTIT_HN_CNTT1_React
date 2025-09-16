import React, { useState } from "react";
import type { Todo } from "../Type";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
  editingId: number | null;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
  editingId,
  setEditingId,
}) => {
  const [editText, setEditText] = useState(todo.title);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
    }
  };

  const isEditing = editingId === todo.id;

  return (
    <div
      className={`flex items-center justify-between p-2 border-b ${
        isEditing ? "relative z-20 bg-gray-100 shadow-lg" : ""
      }`}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 border p-1 mr-2 rounded"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            ✔️
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              disabled={editingId !== null}
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setEditingId(todo.id)}
              disabled={editingId !== null}
              className={`text-blue-500 ${
                editingId !== null ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              disabled={editingId !== null}
              className={`text-red-500 ${
                editingId !== null ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              🗑
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;