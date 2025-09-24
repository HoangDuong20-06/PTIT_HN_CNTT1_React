import React, { useState } from "react";

interface ToolBarProps {
  onFilter: (status: string, priority: string, keyword: string) => void;
}

const ToolBar: React.FC<ToolBarProps> = ({ onFilter }) => {
  const [status, setStatus] = useState("ALL");
  const [priority, setPriority] = useState("ALL");
  const [keyword, setKeyword] = useState("");

  const handleChange = (s = status, p = priority, k = keyword) => {
    onFilter(s, p, k);
  };

  return (
    <div className="flex items-center gap-2 bg-white p-3 shadow rounded mt-3">
      <select
        value={status}
        onChange={(e) => {
          const val = e.target.value;
          setStatus(val);
          handleChange(val, priority, keyword);
        }}
        className="border rounded px-2 py-1"
      >
        <option value="ALL">Tất cả</option>
        <option value="DONE">Hoàn thành</option>
        <option value="TODO">Chưa xong</option>
      </select>

      <select
        value={priority}
        onChange={(e) => {
          const val = e.target.value;
          setPriority(val);
          handleChange(status, val, keyword);
        }}
        className="border rounded px-2 py-1"
      >
        <option value="ALL">Tất cả</option>
        <option value="HIGH">Cao</option>
        <option value="MEDIUM">Trung bình</option>
        <option value="LOW">Thấp</option>
      </select>
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={keyword}
        onChange={(e) => {
          const val = e.target.value;
          setKeyword(val);
          handleChange(status, priority, val);
        }}
        className="flex-1 border rounded px-2 py-1"
      />
    </div>
  );
};
export default ToolBar;
