import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "./store/studentSlice";
import type { AppDispatch, RootState } from "./store/Store";
import AddButton from "./components/addButton";
import ToolBar from "./components/toolBar";
import StudentList from "./components/studentList";
import "./App.css";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.students);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("asc");

  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (loading) {
      setShowLoading(true);
    } else {
      timer = setTimeout(() => setShowLoading(false), 800);
    }
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold flex items-center gap-2 mb-6 text-gray-800">
          🎓 Student Manager
        </h2>

        <div className="flex justify-between items-center mb-6">
          <AddButton />
          <ToolBar
            onSearch={setSearch}
            onFilter={setFilter}
            onSort={setSort}
            onClear={() => {
              setSearch("");
              setFilter("all");
              setSort("asc");
            }}
          />
        </div>
        {showLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <StudentList search={search} filter={filter} sort={sort} />
        )}
      </div>
    </div>
  );
}