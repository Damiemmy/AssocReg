import { useState } from "react";
import logo from "../../assets/logo.png";
import { apiInstance } from "../utils/axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    full_name: "",
    reg_number: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiInstance.post("/api/v1/user/register/", formData);
      console.log("Registration successful", response.data);
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

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 animate-fadeIn z-10">
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
          Register Now and Join the Community
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: "full_name", label: "Full Name", type: "text" },
            { name: "reg_number", label: "Registration Number", type: "text" },
            { name: "email", label: "Email Address", type: "email" },
            { name: "password", label: "Password", type: "password" },
            { name: "password2", label: "Confirm Password", type: "password" },
          ].map((field) => (
            <div className="relative group" key={field.name}>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full rounded-xl border border-white/30 bg-transparent px-4 py-3 text-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 outline-none transition-all duration-300"
              />
              <label className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-200 text-sm pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-400 peer-focus:bg-white/10 peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white/10 peer-not-placeholder-shown:px-1">
                {field.label}
              </label>
            </div>
          ))}

          {/* Phone Input */}
          <div className="relative w-full">
            <PhoneInput
              country={"ng"}
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputProps={{
                name: "phone",
                required: true,
                placeholder: "Enter your phone number",
                className:
                  "w-full rounded-xl border border-white/30 bg-transparent px-16 py-3 text-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 outline-none transition-all",
              }}
              containerClass="w-full rounded-xl overflow-hidden"
              inputStyle={{
                width: "100%",
                background: "transparent",
                color: "white",
              }}
              buttonStyle={{
                background: "transparent",
                border: "none",
              }}
              dropdownStyle={{
                maxHeight: "220px",
                overflowY: "scroll",
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 text-white font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            Sign Up
          </button>

          {/* Login redirect */}
          <p className="text-center text-sm text-blue-200 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-yellow-400 font-semibold hover:underline hover:text-yellow-300 transition"
            >
              Login here
            </a>
          </p>
        </form>

        {/* Local footer text */}
        <p className="text-center text-blue-200 text-xs mt-6">
          © 2026 Federal University of Technology Minna • Secure Registration
        </p>
      </div>
    </div>
  );
}
