import { useEffect, useState } from "react";
import axios from "axios";
import type { Articles } from "../type";
import Header from "./Header";
import BlockButton from "./BlockButton";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
export default function PostManager() {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    axios.get<Articles[]>("http://localhost:8080/article").then((res) => {
      setArticles(res.data);
    });
  }, []);
  const filteredArticles = articles.filter((a) => {
    const matchFilter =
      filter === "published"
        ? a.status
        : filter === "unpublished"
        ? !a.status
        : true;

    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });
  const handleAdd = (data: {
    title: string;
    image: string;
    content: string;
  }) => {
    const newArticle = {
      title: data.title,
      content: data.content,
      dateOfWriting: new Date().toISOString().split("T")[0],
      status: true,
      image: { url: data.image, alt: data.title },
    };

    axios.post("http://localhost:8080/article", newArticle).then((res) => {
      setArticles((prev) => [...prev, res.data]);
    });
  };

  return (
    <div>
      <Header
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        onSubmit={handleAdd}
      />
      <table className="w-full border text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">STT</th>
            <th className="border p-2">Tiêu đề</th>
            <th className="border p-2">Hình ảnh</th>
            <th className="border p-2">Ngày viết</th>
            <th className="border p-2">Trạng thái</th>
            <th className="border p-2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map((a, i) => (
            <tr key={a.id} className="text-center">
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{a.title}</td>
              <td className="border p-2 flex justify-center">
                <img
                  src={a.image.url}
                  alt={a.image.alt}
                  className="w-12 h-12 object-cover rounded-4xl"
                />
              </td>
              <td className="border p-2">{a.dateOfWriting}</td>
              <td className="border p-2">
                {a.status ? (
                  <span className="bg-[#f6ffed] text-[#69b741] p-1 border border-solid border-[#f6ffed] rounded-xl">
                    Đã xuất bản
                  </span>
                ) : (
                  <span className="bg-[#fff1f0] text-[#d8323a] p-1 border border-solid border-[#fff1f0] rounded-xl">
                    Chưa xuất bản
                  </span>
                )}
              </td>
              <td className="border p-2 space-x-2">
                <BlockButton
                  status={a.status}
                  onConfirm={() => {
                    axios
                      .patch(`http://localhost:8080/article/${a.id}`, {
                        status: !a.status,
                      })
                      .then(() => {
                        setArticles((prev) =>
                          prev.map((item) =>
                            item.id === a.id
                              ? { ...item, status: !a.status }
                              : item
                          )
                        );
                      });
                  }}
                />
                <UpdateButton
                  article={a}
                  onConfirm={(data) => {
                    axios
                      .put(`http://localhost:8080/article/${a.id}`, {
                        ...a,
                        title: data.title,
                        content: data.content,
                        image: { url: data.image, alt: data.title },
                      })
                      .then((res) => {
                        const updated = res.data;
                        setArticles((prev) =>
                          prev.map((item) =>
                            item.id === a.id ? updated : item
                          )
                        );
                      });
                  }}
                />
                <DeleteButton
                  onConfirm={() => {
                    axios
                      .delete(`http://localhost:8080/article/${a.id}`)
                      .then(() => {
                        setArticles((prev) =>
                          prev.filter((item) => item.id !== a.id)
                        );
                      });
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
