import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/taskSlice";
import type { AppDispatch } from "../store/Store";

interface DeleteButtonProps {
  id: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    dispatch(deleteTask(id));
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
      >
        Xoá
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-3">Xác nhận xoá</h2>
            <p className="text-sm text-gray-600 mb-4">
              Bạn có chắc muốn xoá task này không?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 rounded border text-sm"
              >
                Hủy
              </button>
              <button
                onClick={handleConfirm}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;