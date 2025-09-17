import AddButton from "./AddButton";

interface HeaderProps {
  filter: string;
  setFilter: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
  onSubmit: (data: { title: string; image: string; content: string }) => void;
}

export default function Header({
  filter,
  setFilter,
  search,
  setSearch,
  onSubmit,
}: HeaderProps) {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-[300px]"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="" hidden>
              Lọc bài viết
            </option>
            <option value="all">Tất cả</option>
            <option value="published">Đã xuất bản</option>
            <option value="unpublished">Chưa xuất bản</option>
          </select>
        </div>
        <AddButton onSubmit={onSubmit} />
      </div>
    </div>
  );
}
