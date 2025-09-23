import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { toggleMenu } from "../store/menuSlice";
import {
  DashboardOutlined,
  UserOutlined,
  WalletOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
} from "@ant-design/icons";

export default function Sidebar() {
  const collapsed = useSelector((state: RootState) => state.menu.collapsed);
  const dispatch = useDispatch<AppDispatch>();

  const menuItems = [
    { icon: <DashboardOutlined />, label: "Bảng điều khiển" },
    { icon: <UserOutlined />, label: "Tài khoản" },
    { icon: <WalletOutlined />, label: "Tài sản" },
    { icon: <BarChartOutlined />, label: "Thống kê" },
    { icon: <FileTextOutlined />, label: "Tài liệu" },
  ];

  return (
    <div
      style={{
        width: collapsed ? "60px" : "180px",
        backgroundColor: "#001529",
        color: "#fff",
        height: "100vh",
        padding: "10px",
        transition: "width 0.3s",
      }}
    >
      {menuItems.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          {item.icon}
          {!collapsed && <span>{item.label}</span>}
        </div>
      ))}

      <div
        style={{
          marginTop: "auto",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(toggleMenu())}
      >
        <LeftOutlined rotate={collapsed ? 180 : 0} />
        {!collapsed && <span>Thu gọn</span>}
      </div>
    </div>
  );
}