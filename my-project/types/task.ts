export interface ITask {
  id: number;
  title: string;
  description: string;
  status: 'To Do' | 'Doing' | 'Done';
  dueDate: string; 
}
