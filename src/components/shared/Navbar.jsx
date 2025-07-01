import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 mb-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          MyApp
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost">
          About
        </Link>
      </div>
    </div>
  );
}
