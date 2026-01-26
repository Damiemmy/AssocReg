import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* NAVBAR */}
      <nav
        className="
          bg-gradient-to-r from-indigo-950/95 via-purple-950/90 to-indigo-950/95
          backdrop-blur-lg
          border-b border-white/10
          shadow-lg shadow-black/30
        "
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-yellow-400 shadow-md" />
            <span className="text-lg font-semibold text-white tracking-wide">
              AssocPay
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/associations", label: "Associations" },
              { to: "/verify-receipt", label: "Verify Receipt" },
              { to: "/login", label: "Login" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="
                  text-white/90
                  hover:text-yellow-400
                  transition
                  relative
                  after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] after:bg-yellow-400
                  hover:after:w-full after:transition-all
                "
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/signup"
              className="
                px-5 py-2 rounded-lg
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-purple-600 hover:to-indigo-600
                transition
                shadow-lg shadow-purple-900/40
                text-white
              "
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white text-3xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs
            bg-gradient-to-b from-indigo-950 via-purple-950 to-black
            shadow-2xl shadow-purple-900/50
            transform transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close Button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Links */}
          <div
            className="
              flex flex-col mt-18 px-6 space-y-6
              bg-gradient-to-b from-purple-900/80 via-indigo-900/70 to-black/80
              backdrop-blur-xl
              border-t border-purple-400/20
              shadow-[inset_0_0_30px_rgba(168,85,247,0.35)]
              text-white text-lg font-medium
            "
          >
            {[
              { to: "/", label: "Home" },
              { to: "/associations", label: "Associations" },
              { to: "/verify-receipt", label: "Verify Receipt" },
              { to: "/login", label: "Login" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="
                  text-white/90
                  hover:text-yellow-400
                  hover:translate-x-1
                  transition-all duration-300
                  border-b border-white/10 pb-2
                "
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/signup"
              onClick={() => setMobileOpen(false)}
              className="
                mt-4 px-5 py-3 rounded-lg
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-purple-600 hover:to-indigo-600
                transition
                shadow-lg shadow-purple-900/50
                text-center mb-4
              "
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
