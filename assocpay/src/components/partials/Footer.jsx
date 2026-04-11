import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-700 border-t border-white/20 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide text-gradient bg-clip-text text-transparent from-yellow-400 via-pink-400 to-purple-400 bg-gradient-to-r">
            AssocPay
          </h2>
          <p className="text-sm text-white/90 leading-relaxed max-w-sm">
            A secure association payment and receipt verification system designed to prevent fraud and simplify fee management.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-pink-300">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:text-yellow-400 transition-all duration-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-all duration-300" to="/associations">
                Associations
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-all duration-300" to="/verify-receipt">
                Verify Receipt
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-all duration-300" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-all duration-300" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-pink-300">
            Information
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:text-yellow-400 transition-all duration-300" to="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-all duration-300" to="/terms">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-all duration-300" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs text-white/70 py-6 border-t border-white/20 bg-gradient-to-r from-indigo-800 via-blue-800 to-purple-800">
        © {new Date().getFullYear()} AssocPay. All rights reserved.
      </div>
    </footer>
  );
}
