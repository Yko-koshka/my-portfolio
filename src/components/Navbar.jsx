import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PiDevToLogoLight } from 'react-icons/pi';

const Navbar = () => {
  // State to track whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-emerald-600 text-white fixed w-full shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with a link to the home page */}
        <Link to="/my-portfolio/">
          <PiDevToLogoLight className="w-12 h-12 text-white" />
        </Link>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex space-x-6">
          {['About', 'Skills', 'Projects', 'Contacts'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-yellow-300 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon (hamburger / close icon) */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="md:hidden bg-emerald-700 text-white py-4 space-y-4 text-center">
          {['Home', 'About', 'Skills', 'Projects', 'Contacts'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="block py-2 hover:bg-emerald-500 transition"
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
