import { useState } from "react";
import type { Articles } from "../type";
interface UpdateButtonProps {
  article: Articles;
  onConfirm: (data: { title: string; image: string; content?: string }) => void;
}

export default function UpdateButton({
  article,
  onConfirm,
}: UpdateButtonProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(article.title);
  const [image, setImage] = useState(article.image.url);
  const [content, setContent] = useState(article.content);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#fff7e6] text-[#df793f] px-2 py-1 rounded border border-solid border-[#fff7e6]"
      >
        Sửa
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg w-[500px]">
            <div className="flex justify-between items-center border-b p-3">
              <h2 className="font-bold">Cập nhật bài viết</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <label className="flex text-sm font-medium">Tiêu đề</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
              <div>
                <label className="flex text-sm font-medium">
                  Hình ảnh (URL)
                </label>
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
              <div>
                <label className="flex text-sm font-medium">Nội dung</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
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
                  onConfirm({ title, image, content });
                  setOpen(false);
                }}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
