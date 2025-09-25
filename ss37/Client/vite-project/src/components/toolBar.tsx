import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

type Props = {
  onSearch: (value: string) => void;
  onFilter: (value: string) => void;
  onSort: (value: string) => void;
  onClear: () => void;
};

export default function ToolBar({
  onSearch,
  onFilter,
  onSort,
  onClear,
}: Props) {
  const [search, setSearch] = useState("");
  const [grade, setGrade] = useState("all");
  const [sort, setSort] = useState("asc");

  return (
    <div className="flex gap-4 items-center flex-wrap bg-gray-50 p-3 rounded-lg shadow">
      {/* Tìm kiếm */}
      <TextField
        size="small"
        label="Tìm theo tên"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
      />

      {/* Lọc theo lớp */}
      <FormControl size="small">
        <InputLabel id="grade-label">Grade</InputLabel>
        <Select
          labelId="grade-label"
          value={grade}
          onChange={(e) => {
            setGrade(e.target.value);
            onFilter(e.target.value);
          }}
        >
          <MenuItem value="all">Tất cả</MenuItem>
          <MenuItem value="CNTT1">CNTT1</MenuItem>
          <MenuItem value="CNTT2">CNTT2</MenuItem>
          <MenuItem value="CNTT3">CNTT3</MenuItem>
        </Select>
      </FormControl>

      {/* Sắp xếp theo tên */}
      <FormControl size="small">
        <InputLabel id="sort-name-label">Sắp xếp theo tên</InputLabel>
        <Select
          labelId="sort-name-label"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            onSort(e.target.value);
          }}
        >
          <MenuItem value="asc">Tên A → Z</MenuItem>
          <MenuItem value="desc">Tên Z → A</MenuItem>
        </Select>
      </FormControl>

      {/* Nút clear */}
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          setSearch("");
          setGrade("all");
          setSort("asc");
          onClear();
        }}
      >
        CLEAR
      </Button>
    </div>
  );
}
