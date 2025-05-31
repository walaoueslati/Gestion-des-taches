"use client";

import { FaPlus } from 'react-icons/fa';
import React, { FormEventHandler, useState } from 'react';
import Modal from './Modal';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddProject: React.FC = () => {
  const router=useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'To Do' | 'Doing' | 'Done'>('To Do');
  const [dueDate, setDueDate] = useState('');

const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();

  await addTodo({ title, description, status, dueDate });
  setTitle('');
  setDescription('');
  setStatus('To Do');
  setDueDate('');
  setModalOpen(false);
  router.refresh();
};

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2"
      >
        Add new Task <FaPlus />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo} className="space-y-4">
          <h3 className="font-bold text-lg">Add New Project</h3>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'To Do' | 'Doing' | 'Done')}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="To Do">To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
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
    </div>
  );
};

export default AddProject;
