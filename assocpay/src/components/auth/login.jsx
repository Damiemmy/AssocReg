import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { apiInstance } from "../utils/axios";

export default function Login() {
  const [formData, setFormData] = useState({
    reg_number: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiInstance.post("token/", formData);
      const { access, refresh } = response.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

      console.log("Login successful", response.data);
      // TODO: navigate to dashboard
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div
      className="min-h-screen pt-28 pb-24 flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://i.imgur.com/m8sUaTI.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/80 via-blue-800/60 to-purple-700/70"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Institution Logo"
            className="h-16 w-20 sm:h-20 sm:w-20 animate-pulse"
          />
        </div>

        {/* Header */}
        <h2 className="text-center text-white text-3xl font-bold mb-2 tracking-wide">
          AssocPay
        </h2>
        <p className="text-center text-blue-200 mb-8">
          Welcome Back! Login to Continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Registration Number */}
          <div className="relative group">
            <input
              type="text"
              name="reg_number"
              value={formData.reg_number}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full rounded-xl border border-white/30 bg-transparent px-4 py-3 text-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 outline-none transition-all"
            />
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-200 text-sm pointer-events-none transition-all
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-400 peer-focus:bg-white/10 peer-focus:px-1
              peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white/10 peer-not-placeholder-shown:px-1">
              Registration Number
            </label>
          </div>

          {/* Password */}
          <div className="relative group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full rounded-xl border border-white/30 bg-transparent px-4 py-3 text-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 outline-none transition-all"
            />
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-200 text-sm pointer-events-none transition-all
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-400 peer-focus:bg-white/10 peer-focus:px-1
              peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white/10 peer-not-placeholder-shown:px-1">
              Password
            </label>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/reset-password"
              className="text-sm text-blue-300 hover:text-yellow-400 transition"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 text-white font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-transform"
          >
            Sign In
          </button>

          {/* Signup redirect */}
          <p className="text-center text-sm text-blue-200 mt-4">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-yellow-400 font-semibold hover:underline"
            >
              Sign Up here
            </Link>
          </p>
        </form>

        {/* Footer */}
        <p className="text-center text-blue-200 text-xs mt-6">
          © 2026 Federal University of Technology Minna • Secure Login
        </p>
      </div>
    </div>
  );
}
