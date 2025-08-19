import './App.css'

function App() {
  const user = {
    name: "Nguyễn Văn A",
    birth: "06/03/2024",
    email: "nguyenvana@example.com",
    address: "Hà Nội, Việt Nam",
    gender: "Nam"
  };
  return (
    <>
      <div>
        <h3>Thông tin cá nhân</h3>
        <ul>
          <li>Họ và tên: <b>{user.name}</b></li>
          <li>Giới tính: <b>{user.gender}</b></li>
          <li>Ngày sinh: <b>{user.birth}</b></li>
          <li>Email: <b>{user.email}</b></li>
          <li>Địa chỉ: <b>{user.address}</b></li>
        </ul>
      </div>
    </>
  )
}

export default App
