import { ITask } from "@/types/task";

interface TasksProps {
 Task: ITask;
}

const Task: React.FC<TasksProps> = ({ Task }) => {
  return (
    <tr key={Task.id}>
      <td className="font-semibold">{Task.title}</td>
      <td>{Task.description}</td>
      <td>
      <span
  className={`italic uppercase font-semibold ${
    Task.status === "To Do"
      ? "text-red-600"
      : Task.status === "Doing"
      ? "text-yellow-600"
      : "text-green-600"
  }`}
>
  {Task.status}
</span>

      </td>
      <td>{Task.dueDate}</td>
    </tr>
  );
};

export default Task;
