"use client";

import { ITask } from "@/types/task";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";

interface TasksProps {
 Task: ITask;
}

const Task: React.FC<TasksProps> = ({ Task }) => {
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
  const [modalOpenDelete, setModalOpenDelete] = useState<boolean>(false);
  const [Edittitle, setEditTitle] = useState(Task.title);
   const [Editdescription, setEditDescription] = useState(Task.description);
   const [Editstatus, setEditStatus] = useState(Task.status);
   const [EditdueDate, setEditDueDate] = useState(Task.dueDate);

   const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();

};
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
      <td className="flex gap-4">
      <MdModeEdit onClick={()=>setModalOpenEdit(true)} cursor='pointer'  className="text-blue-500"/>
      <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
        <form onSubmit={handleSubmitEditTodo} className="space-y-4">
          <h3 className="font-bold text-lg">Add New Project</h3>

          <input
            type="text"
            placeholder="Title"
            value={Edittitle}
            onChange={(e) => setEditTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <textarea
            placeholder="Description"
            value={Editdescription}
            onChange={(e) => setEditDescription(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>

          <select
            value={Editstatus}
            onChange={(e) => setEditStatus(e.target.value as 'To Do' | 'Doing' | 'Done')}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="To Do">To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>

          <input
            type="date"
            value={EditdueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
      <FaRegTrashAlt cursor='pointer' className="text-red-500"/>

      </td>
    </tr>
  );
};

export default Task;
