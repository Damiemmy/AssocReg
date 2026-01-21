import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { apiInstance } from "../utils/axios";
export default function Login() {
  const [formData, setFormData] = useState({
    reg_number: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await apiInstance.post("token/", formData);

    const { access, refresh } = response.data;

    // store tokens
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);

    console.log("Login successful", response.data);

    // later → navigate to dashboard
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

 
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4
                 bg-[radial-gradient(circle_at_top_left,#6366f1,transparent_40%),radial-gradient(circle_at_bottom_right,#22d3ee,transparent_40%),#0f172a]"
    >
      <div
        className="w-full max-w-[420px] rounded-2xl border border-white/25
                   bg-white/10 backdrop-blur-xl shadow-2xl
                   px-8 py-10 sm:px-10 animate-fadeIn"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Site Logo" className="h-14 sm:h-16" />
        </div>

        <h2 className="text-center text-white text-2xl font-semibold mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-indigo-200 text-sm mb-8">
          Login with your registration number
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Registration Number */}
          <div className="relative">
            <input
              type="text"
              name="reg_number"
              value={formData.reg_number}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full rounded-xl border border-white/30
                         bg-transparent px-4 py-3 text-gray-200
                         focus:border-indigo-400 focus:ring-2
                         focus:ring-indigo-400/40 outline-none"
            />
            <label
              className="absolute left-4 top-1/2 -translate-y-1/2
                         text-indigo-200 text-sm pointer-events-none
                         transition-all
                         peer-focus:-top-2 peer-focus:text-xs
                         peer-focus:text-indigo-400 peer-focus:bg-[#0f172a]
                         peer-focus:px-1
                         peer-not-placeholder-shown:-top-2
                         peer-not-placeholder-shown:text-xs
                         peer-not-placeholder-shown:bg-[#0f172a]
                         peer-not-placeholder-shown:px-1"
            >
              Registration Number
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full rounded-xl border border-white/30
                         bg-transparent px-4 py-3 text-gray-200
                         focus:border-indigo-500 focus:ring-2
                         focus:ring-indigo-400/40 outline-none"
            />
            <label
              className="absolute left-4 top-1/2 -translate-y-1/2
                         text-indigo-200 text-sm pointer-events-none
                         transition-all
                         peer-focus:-top-2 peer-focus:text-xs
                         peer-focus:text-indigo-500 peer-focus:bg-[#0f172a]
                         peer-focus:px-1
                         peer-not-placeholder-shown:-top-2
                         peer-not-placeholder-shown:text-xs
                         peer-not-placeholder-shown:bg-[#0f172a]
                         peer-not-placeholder-shown:px-1"
            >
              Password
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl py-3 font-semibold text-white
                       bg-gradient-to-br from-indigo-600 to-indigo-500
                       hover:-translate-y-0.5 hover:shadow-xl
                       transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-indigo-200 text-xs mt-8">
          © 2026 Your Institution • Secure Login
        </p>
      </div>
    </div>
  );
}
