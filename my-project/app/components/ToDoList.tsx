import React from 'react'
import { ITask } from '@/types/task'
import Task from './Task' 

interface TodoListProps {
  Tasks: ITask[]
}

const ToDoList: React.FC<TodoListProps> = ({ Tasks }) => {
  return (
    <div className="">
  <table className="min-w-full table-auto border border-gray-300  border-separate">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 text-left">Titre</th>
        <th className="px-4 py-2 text-left">Description</th>
        <th className="px-4 py-2 text-left">Statut</th>
        <th className="px-4 py-2 text-left">Date d’échéance</th>
      </tr>
    </thead>
    <tbody>
      {Tasks.map((task) => (
  <Task key={task.id} Task={task} />
))}
    </tbody>
  </table>
</div>

  )
}

export default ToDoList
