import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./store/bookSlice";
import type { AppDispatch, RootState } from "./store/store";
import AddButton from "./components/addButton";
import ToolBar from "./components/toolBar";
import BookList from "./components/bookList";
import "./App.css";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.books);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("asc");

  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchBooks());
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
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6 text-gray-800">
        📚 Book Library Manager
      </h2>
      <div className="mb-6 flex justify-start">
        <AddButton />
      </div>
      <div className="mb-8">
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
        <BookList search={search} filter={filter} sort={sort} />
      )}
    </div>
  </div>
);
}