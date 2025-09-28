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
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("asc");

  return (
    <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
      <TextField
        size="small"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
        className="w-[590px]"
      />
      <FormControl size="small" className="min-w-[150px] w-[110px] text-start">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            onFilter(e.target.value);
          }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="1">Science</MenuItem>
          <MenuItem value="2">History</MenuItem>
          <MenuItem value="3">Novel</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" className="min-w-[140px]">
        <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          labelId="sort-label"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            onSort(e.target.value);
          }}
        >
          <MenuItem value="asc">Title A → Z</MenuItem>
          <MenuItem value="desc">Title Z → A</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => {
          setSearch("");
          setCategory("all");
          setSort("asc");
          onClear();
        }}
      >
        CLEAR
      </Button>
    </div>
  );
}
