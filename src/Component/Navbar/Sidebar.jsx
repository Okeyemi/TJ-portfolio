import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 z-30 overflow-auto md:hidden`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col items-start justify-center h-full px-4 py-8 space-y-6">
        <Link
          to="/"
          className="text-2xl py-2 hover:text-blue-500"
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-2xl py-2 hover:text-blue-500"
          onClick={onClose}
        >
          About
        </Link>
        <Link
          to="/languages"
          className="text-2xl py-2 hover:text-blue-500"
          onClick={onClose}
        >
          Languages
        </Link>
        <Link
          to="/projects"
          className="text-2xl py-2 hover:text-blue-500"
          onClick={onClose}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="text-2xl py-2 hover:text-blue-500"
          onClick={onClose}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired, 
    onClose: PropTypes.func.isRequired, 
  };
export default Sidebar;
