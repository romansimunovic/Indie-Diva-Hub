import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-full transition text-sm font-medium ${
      location.pathname === path
        ? "bg-pink-500 text-white shadow-sm"
        : "text-gray-700 hover:text-pink-600 hover:bg-pink-100"
    }`;

  return (
    <nav className="bg-white/70 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-pink-100">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link
          to="/"
          className="text-xl font-extrabold text-pink-600 tracking-tight"
        >
          Indie Diva Hub
        </Link>
        <div className="flex gap-3">
          <Link to="/" className={linkClass("/")}>
            Umjetnice
          </Link>
          <Link to="/dodaj" className={linkClass("/dodaj")}>
            Dodaj novu
          </Link>
        </div>
      </div>
    </nav>
  );
}
