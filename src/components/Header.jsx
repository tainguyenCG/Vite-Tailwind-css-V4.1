import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex space-x-4">
        <Link to="/">Trang chủ</Link>
        <Link to="/about">Giới thiệu</Link>
      </nav>
    </header>
  );
}
