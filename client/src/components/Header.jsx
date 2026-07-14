import { Link } from "react-router-dom";
import useAuthStore from "../store/auth.store";

const Header = () => {
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Padma Jobs
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
            Jobs
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-200"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
