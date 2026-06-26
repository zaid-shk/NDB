import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ logo, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md px-8 py-2 shadow-lg shadow-black/20">
      <div className="flex justify-between items-center">
        <img src={logo} alt="" className="h-14 w-14" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="px-4 py-2 block text-white font-medium text-sm tracking-wide hover:bg-white/10 rounded-md transition-all duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/join"
              className="ml-3 px-5 py-2 block text-white font-semibold text-sm bg-green-700 hover:bg-green-600 rounded-md transition-all duration-200"
            >
              Join Party
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 pb-3">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white font-medium text-sm tracking-wide hover:bg-white/10 rounded-md transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/join"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-white font-semibold text-sm bg-green-700 hover:bg-green-600 rounded-md transition-all duration-200 mt-1"
          >
            Join Party
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
