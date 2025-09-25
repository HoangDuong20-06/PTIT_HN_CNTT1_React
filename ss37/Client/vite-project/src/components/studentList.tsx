import { useSelector } from "react-redux";
import type { RootState } from "../store/Store";
import UpdateButton from "./updateButton";
import DeleteButton from "./deleteButton";

export default function StudentList({
  search,
  filter,
  sort,
}: {
  search: string;
  filter: string;
  sort: string;
}) {
  const { list } = useSelector((state: RootState) => state.students);

  let students = [...list];

  if (filter !== "all") {
    students = students.filter((s) => s.grade === filter);
  }
  if (search) {
    students = students.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
  }
const removeDiacritics = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const getLastName = (fullName: string) => {
  const parts = fullName.trim().split(" ");
  return parts[parts.length - 1];
};

students.sort((a, b) => {
  const lastA = removeDiacritics(getLastName(a.name));
  const lastB = removeDiacritics(getLastName(b.name));

  const result = lastA.localeCompare(lastB);
  return sort === "asc" ? result : -result;
});
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {students.map((s) => (
        <div
          key={s.id}
          className="flex justify-between items-center bg-gray-50 rounded-lg shadow px-4 py-3"
        >
          <div>
            <p className="font-semibold">{s.name}</p>
            <p className="text-sm text-gray-600">
              Age: {s.age} - Grade: {s.grade}
            </p>
          </div>
          <div className="flex gap-2">
            <UpdateButton student={s} />
            <DeleteButton id={s.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
