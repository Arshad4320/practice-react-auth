import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../../authContexts/authContext";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutUser } = use(AuthContext);
  const handleLogout = () => {
    logOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "text-white hover:text-yellow-300";

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">MyApp</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-white text-blue-500 rounded-md border px-4 py-2"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-white text-blue-500 rounded-md border px-4 py-2">
                Login
              </button>
            </Link>
          )}

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-500 px-4 pt-2 pb-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
