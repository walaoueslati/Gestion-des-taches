import { getAllTasks } from "@/api";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";

export default async function Home() {
  const Tasks=await getAllTasks();
  return (
    <main className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Todo List App</h1>
          <AddTask/>
        </div>
        <ToDoList Tasks={Tasks}/>
     </main>
  );
}
