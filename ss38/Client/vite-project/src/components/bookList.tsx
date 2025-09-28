import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import UpdateButton from "./updateButton";
import DeleteButton from "./deleteButton";

const categoryOptions = [
  { value: 1, label: "Science" },
  { value: 2, label: "History" },
  { value: 3, label: "Novel" },
];

const getCategoryLabel = (value: number) => {
  const found = categoryOptions.find((opt) => opt.value === value);
  return found ? found.label : "Unknown";
};

export default function BookList({
  search,
  filter,
  sort,
}: {
  search: string;
  filter: string; 
  sort: string;
}) {
  const { list } = useSelector((state: RootState) => state.books);
  let books = [...list];
  if (filter !== "all") {
    const filterValue = Number(filter);
    books = books.filter((s) => s.category === filterValue);
  }
  if (search) {
    const lower = search.toLowerCase();
    books = books.filter(
      (s) =>
        s.title.toLowerCase().includes(lower) ||
        s.author.toLowerCase().includes(lower)
    );
  }
  const removeDiacritics = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const getLastName = (fullName: string) => {
    const parts = fullName.trim().split(" ");
    return parts[parts.length - 1];
  };

  books.sort((a, b) => {
    const lastA = removeDiacritics(getLastName(a.title));
    const lastB = removeDiacritics(getLastName(b.title));
    const result = lastA.localeCompare(lastB);
    return sort === "asc" ? result : -result;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((s) => (
        <div
          key={s.id}
          className="flex justify-between items-center bg-gray-50 rounded-lg shadow px-4 py-3"
        >
          <div>
            <p className="font-semibold">{s.title}</p>
            <p className="text-sm text-gray-600">
              {s.author} • {s.year} • {getCategoryLabel(s.category)}
            </p>
          </div>
          <div className="flex gap-2">
            <UpdateButton book={s} />
            <DeleteButton id={s.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
