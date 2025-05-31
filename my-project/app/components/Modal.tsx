"use client";
import React from 'react';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">\
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setModalOpen(false)}
      />
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 z-50 p-6">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={() => setModalOpen(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
