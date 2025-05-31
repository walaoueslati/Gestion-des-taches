export interface ITask {
  id: string;
  title: string;
  description: string;
  status: 'To Do' | 'Doing' | 'Done';
  dueDate: string; 
}
