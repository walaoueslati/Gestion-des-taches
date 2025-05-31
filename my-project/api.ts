import { ITask } from "./types/task";

const baseUrl='http://localhost:3002';

export const getAllTasks = async () : Promise<ITask[]> =>{

    const res = await fetch(`${baseUrl}/Tasks`, { cache: 'no-store' });
    const todos=await res.json();
    return todos;

}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/Tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};
