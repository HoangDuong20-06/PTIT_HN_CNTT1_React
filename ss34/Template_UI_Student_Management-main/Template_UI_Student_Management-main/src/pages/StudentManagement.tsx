import type { Student } from "../utils/types";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import { useState } from "react";

const StudentManagement = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
    { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
    { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
  ]);

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [formMode, setFormMode] = useState<"add" | "edit" | "view">("add");

  const handleAddStudent = (student: Student) => {
    setStudents([...students, student]);
    setFormMode("add");
    setSelectedStudent(null);
  };

  const handleUpdateStudent = (student: Student) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === student.id ? student : s))
    );
    setFormMode("add");
    setSelectedStudent(null);
  };

  const handleDeleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    setFormMode("add");
    setSelectedStudent(null);
  };

  const handleSearch = (keyword: string) => {
    setStudents((prev) =>
      prev.filter((s) =>
        s.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  const handleView = (student: Student) => {
    setSelectedStudent(student);
    setFormMode("view");
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setFormMode("edit");
  };
  const handleAddClick = () => {
    setSelectedStudent(null); 
    setFormMode("add");       
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} onAdd={handleAddClick} />
        <StudentList
          students={students}
          onDelete={handleDeleteStudent}
          onView={handleView}
          onEdit={handleEdit}
        />
      </div>
      <StudentForm
        onSubmit={formMode === "edit" ? handleUpdateStudent : handleAddStudent}
        student={selectedStudent}
        mode={formMode}
      />
    </div>
  );
};

export default StudentManagement;
