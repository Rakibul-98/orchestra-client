import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import logo from "../../assets/orchestra.png";
import { HiMenu, HiX } from "react-icons/hi";
import { ProfileDropdownSkeleton } from "./ProfileDropdownSkeleton";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const loggedInUser = useAppSelector(selectCurrentUser);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successful");
    setTimeout(() => window.location.reload(), 200);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/add-event", label: "Add Event" },
    { to: "/my-events", label: "My Events" },
    { to: "/about", label: "About Us" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-gray-800 text-white shadow-lg">
      <div className="w-[91%] mx-auto flex justify-between items-center py-3">
        {/* Logo and Website Name */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="text-2xl font-bold uppercase font-mono">
            Orchestra
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-lg px-2 py-1 transition ${
                  isActive
                    ? "border-b-2 border-yellow-400 text-yellow-400 font-semibold"
                    : "hover:text-yellow-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {loggedInUser ? (
            <ProfileDropdown user={loggedInUser} handleLogout={handleLogout} />
          ) : (
            <NavLink
              to="/login"
              state={{ from: location.pathname }}
              className="ml-4 px-4 py-1 text-sm uppercase font-bold border border-yellow-400 hover:bg-yellow-400 hover:text-gray-800 transition"
            >
              Sign In
            </NavLink>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          {loggedInUser ? (
            <ProfileDropdown user={loggedInUser} handleLogout={handleLogout} />
          ) : (
            <NavLink
              to="/login"
              state={{ from: location.pathname }}
              className="px-3 py-1 text-sm uppercase font-bold border border-yellow-400 hover:bg-yellow-400 hover:text-gray-800 transition"
            >
              Sign In
            </NavLink>
          )}

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <HiX className="text-3xl text-yellow-400" />
            ) : (
              <HiMenu className="text-3xl text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 w-[60%] bg-gray-900 text-white z-50 py-4 px-3 shadow-lg">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-2 py-1 ${
                        isActive
                          ? "text-yellow-400 font-semibold"
                          : "hover:text-yellow-400"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                {loggedInUser ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-2 py-1 hover:text-yellow-400"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    state={{ from: location.pathname }}
                    className="block px-2 py-1 hover:text-yellow-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
