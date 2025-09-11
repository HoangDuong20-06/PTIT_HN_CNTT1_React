import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1 rounded ${
      isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-500"
    }`;

  return (
    <nav className="flex gap-4 p-4 justify-center">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/product" className={linkClass}>
        Product
      </NavLink>
      <NavLink to="/detail" className={linkClass}>
        Detail
      </NavLink>
    </nav>
  );
}
