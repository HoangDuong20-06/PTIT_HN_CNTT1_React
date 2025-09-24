export type Priority = "HIGH" | "MEDIUM" | "LOW";

export interface Task {
  id?: number; 
  taskName: string;
  completed: boolean;
  priority: Priority;
}
