import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Account from "./components/Account";
import PrivateRouter from "./components/PrivateRouter";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRouter />}>
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
}
