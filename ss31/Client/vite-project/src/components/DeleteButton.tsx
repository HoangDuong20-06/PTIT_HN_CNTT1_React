import { useState } from "react";

interface DeleteButtonProps {
  onConfirm: () => void;
}

export default function DeleteButton({ onConfirm }: DeleteButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#fff1f0] text-[#d8323a] px-2 py-1 rounded border border-solid border-[#fff1f0]"
      >
        Xóa
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg w-[400px]">
            <div className="flex justify-between items-center border-b p-3">
              <h2 className="font-bold">Xác nhận</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="p-4 flex items-center space-x-2">
              <span className="text-yellow-500">⚠️</span>
              <p>Bạn có chắc chắn muốn xóa bài viết này?</p>
            </div>
            <div className="flex justify-end gap-2 border-t p-3">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 rounded border"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  setOpen(false);
                }}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
