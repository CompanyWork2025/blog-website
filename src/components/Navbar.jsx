import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png'; // Import your logo image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white p-4 md:p-2 lg:px-14 sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left side - Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 lg:h-14 w-auto" /> {/* Adjust the logo size as necessary */}
          </Link>
        </div>

        {/* Center - Links (Visible on larger screens) */}
        <div className="hidden md:flex text-md space-x-8  lg:space-x-20">
          <Link to="/" className="text-blue-400 font-semibold relative group">
            HOME
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link to="/university" className="text-blue-400 font-semibold relative group">
            UNIVERSITY
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link to="/news" className="text-blue-400 font-semibold relative group">
            NEWS
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
        </div>

        {/* Right side - "Visit Us" button */}
        <div>
          <a 
            href="https://www.rostgmu.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:block text-white bg-blue-400 px-6 py-2 font-semibold rounded-full hover:bg-blue-700"
          >
            Visit Us
          </a>
        </div>

        {/* Hamburger Menu Button (for small screens) */}
        <button onClick={toggleMenu} className="md:hidden text-blue-600">
          {isOpen ? (
            // Close button (cross)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Toggle on button click) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 py-4 text-center">
          <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li><Link to="/university" className="text-blue-600 hover:underline">University</Link></li>
          <li><Link to="/news" className="text-blue-600 hover:underline">News</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
