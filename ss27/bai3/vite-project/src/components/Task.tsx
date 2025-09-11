export interface Task {
  id: string;
  name: string;
  description: string;
}

export const tasks: Task[] = [
  {
    id: "1",
    name: "Học React Router",
    description: "Tìm hiểu cách sử dụng Dynamic Routes và useNavigate."
  },
  {
    id: "2",
    name: "Làm bài tập TypeScript",
    description: "Hoàn thành các bài tập về interface và generics."
  },
  {
    id: "3",
    name: "Tập thể dục",
    description: "Chạy bộ 30 phút hoặc nhảy dây."
  }
];
