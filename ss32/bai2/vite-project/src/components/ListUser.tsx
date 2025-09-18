import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch, User } from "./store";
import { deleteUser } from "./store";

const ListUser: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Danh sách User</h2>
      <table
        border={1}
        cellPadding={10}
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: User) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.userName}</td>
              <td>{u.gender}</td>
              <td>{u.dateBirth}</td>
              <td>{u.address}</td>
              <td>
                <button>Sửa</button>{" "}
                <button onClick={() => handleDelete(u.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;