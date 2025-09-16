import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import type { Todo } from "./Type";
import "./App.css";

const API_URL = "http://localhost:8080/todos";

type Filter = "all" | "completed" | "active";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    axios.get(API_URL).then((res) => setTodos(res.data));
  }, []);
  const addTodo = () => {
    if (!input.trim()) {
      setError("Tên công việc không được để trống"); 
      return;
    }
    const newTodo = { title: input.trim(), completed: false };
    axios.post(API_URL, newTodo).then((res) => {
      setTodos([...todos, res.data]);
      setInput("");
      setError(""); 
    });
  };
  const toggleTodo = (id: number) => {
    if (editingId !== null) return;
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    axios
      .put(`${API_URL}/${id}`, { ...todo, completed: !todo.completed })
      .then((res) => {
        setTodos(todos.map((t) => (t.id === id ? res.data : t)));
      });
  };
  const deleteTodo = (id: number) => {
    if (editingId !== null) return;
    axios.delete(`${API_URL}/${id}`).then(() => {
      setTodos(todos.filter((t) => t.id !== id));
    });
  };
  const editTodo = (id: number, newTitle: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    axios.put(`${API_URL}/${id}`, { ...todo, title: newTitle }).then((res) => {
      setTodos(todos.map((t) => (t.id === id ? res.data : t)));
      setEditingId(null);
    });
  };
  const clearCompleted = () => {
    if (editingId !== null) return;
    const completedTodos = todos.filter((t) => t.completed);
    completedTodos.forEach((todo) => {
      axios.delete(`${API_URL}/${todo.id}`);
    });
    setTodos(todos.filter((t) => !t.completed));
  };
  const clearAll = () => {
    if (editingId !== null) return;
    todos.forEach((todo) => {
      axios.delete(`${API_URL}/${todo.id}`);
    });
    setTodos([]);
  };
  const filteredTodos = todos.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-white">
      <h1 className="text-xl font-bold text-center mb-4">Quản lý công việc</h1>
      <div className="flex mb-2">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError(""); 
          }}
          placeholder="Nhập tên công việc"
          className="flex-1 border p-2 rounded-l"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 rounded-r"
          disabled={editingId !== null}
        >
          Thêm
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <div className="flex justify-center space-x-2 mb-4">
        <button
          className={`px-3 py-1 rounded ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("all")}
          disabled={editingId !== null}
        >
          Tất cả
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("completed")}
          disabled={editingId !== null}
        >
          Hoàn thành
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("active")}
          disabled={editingId !== null}
        >
          Đang thực hiện
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
        editingId={editingId}
        setEditingId={setEditingId}
      />
      <div className="flex justify-between mt-4">
        <button
          className="bg-red-500 text-white px-3 py-2 rounded"
          onClick={clearCompleted}
          disabled={editingId !== null}
        >
          Xóa công việc hoàn thành
        </button>
        <button
          className="bg-red-700 text-white px-3 py-2 rounded"
          onClick={clearAll}
          disabled={editingId !== null}
        >
          Xóa tất cả công việc
        </button>
      </div>
    </div>
  );
};

export default App;