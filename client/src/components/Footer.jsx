import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-white mt-20">
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold text-blue-400 mb-4">Padma Jobs</h3>
        <p className="text-gray-400">
          Connecting talent with opportunities. Find your dream job today.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-400">
          <li>
            <Link to="/jobs" className="hover:text-white">
              Browse Jobs
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-400">
          <li>123 Main Street, Dhaka</li>
          <li>support@padmajobs.com</li>
          <li>+880 1234 567890</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/mahfuzdh"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/mahfuz.muzakkir"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://x.com/Mahfuz_Muzakkir"
            className="text-gray-400 hover:text-white"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 py-4 text-center text-gray-300">
      <p>&copy; {new Date().getFullYear()} Padma Jobs. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
