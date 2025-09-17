import { useState } from "react";

interface AddButtonProps {
  onSubmit: (data: { title: string; image: string; content: string }) => void;
}

export default function AddButton({ onSubmit }: AddButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState<{
    title?: string;
    image?: string;
    content?: string;
  }>({});

  const handleSubmit = () => {
    const newErrors: typeof errors = {};

    if (!title.trim()) newErrors.title = "Tên bài viết không được để trống!";
    if (!image.trim()) newErrors.image = "Hình ảnh không được để trống!";
    if (!content.trim()) newErrors.content = "Nội dung không được để trống!";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onSubmit({ title, image, content });
    setIsOpen(false);
    setTitle("");
    setImage("");
    setContent("");
    setErrors({});
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Thêm mới bài viết
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[500px] p-4 rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-3">Thêm mới bài viết</h2>

            <label className="flex mb-2">Tên bài viết</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border p-2 mb-1 rounded ${
                errors.title ? "border-red-500" : ""
              }`}
              placeholder="Nhập tên bài viết"
            />
            {errors.title && (
              <p className="flex text-red-500 text-sm mb-2">{errors.title}</p>
            )}

            <label className="flex mb-2">Hình ảnh</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className={`w-full border p-2 mb-1 rounded ${
                errors.image ? "border-red-500" : ""
              }`}
              placeholder="Nhập link hình ảnh"
            />
            {errors.image && (
              <p className="flex text-red-500 text-sm mb-2">{errors.image}</p>
            )}

            <label className="flex mb-2">Nội dung</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={`w-full border p-2 mb-1 rounded h-28 ${
                errors.content ? "border-red-500" : ""
              }`}
              placeholder="Nhập nội dung"
            />
            {errors.content && (
              <p className="flex text-red-500 text-sm mb-2">{errors.content}</p>
            )}

            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => {
                  setTitle("");
                  setImage("");
                  setContent("");
                  setErrors({});
                }}
                className="px-3 py-1 border rounded"
              >
                Làm mới
              </button>
              <button
                onClick={handleSubmit}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Xuất bản
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
