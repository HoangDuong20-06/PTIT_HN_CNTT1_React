import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state);

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h2>Thông tin cá nhân</h2>
      <p><b>Id:</b> {user.id}</p>
      <p><b>Họ và tên:</b> {user.userName}</p>
      <p><b>Giới tính:</b> {user.gender}</p>
      <p><b>Ngày sinh:</b> {user.dateBirth}</p>
      <p><b>Địa chỉ:</b> {user.address}</p>
    </div>
  );
};

export default Profile;