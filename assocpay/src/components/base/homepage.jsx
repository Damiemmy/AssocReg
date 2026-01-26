import { motion } from "framer-motion";

// External image URLs for hero and features
const heroImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80";
const feature1 =
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"; // secure payments

const feature2 =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"; // fast digital transaction

const feature3 =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"; // students + tech

export default function LandingPage() {
  return (
    <main className="w-full overflow-x-hidden font-sans">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-yellow-500 text-white overflow-hidden">
        
        {/* Decorative floating circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-700 rounded-full opacity-30 animate-blob mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-400 rounded-full opacity-30 animate-blob animation-delay-2000 mix-blend-multiply filter blur-3xl"></div>
        
        {/* Text */}
        <motion.div 
          className="max-w-xl px-6 md:px-12 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 pt-5 md:pt-2 drop-shadow-xl">
            AssocPay
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
            Secure, automatic, and fraud-proof student association payment and receipt system.
          </p>
          <a href="/register"
            className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-purple-600 to-indigo-600 font-semibold text-black shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Get Started
          </a>
        </motion.div>

        {/* Hero Image with 3D Effect */}
        <motion.div 
          className="mt-10 md:mt-0 md:ml-10 perspective-1000 z-10"
          initial={{ opacity: 0, rotateY: 45 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={heroImage} 
            alt="Hero" 
            className="w-80 md:w-[500px] rounded-3xl shadow-2xl hover:rotate-3 transform transition-all duration-500"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12 drop-shadow-md">Why AssocPay?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Feature 1 */}
            <motion.div 
              className="bg-white p-6 rounded-3xl shadow-2xl hover:scale-105 transform transition-all duration-500"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <img src={feature1} alt="Secure" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold mb-2 text-indigo-900">Fraud-proof Payments</h3>
              <p className="text-gray-700">Every receipt has a QR code and digital verification, making it impossible to fake payments.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="bg-white p-6 rounded-3xl shadow-2xl hover:scale-105 transform transition-all duration-500"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <img src={feature2} alt="Fast" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold mb-2 text-purple-800">Fast & Automated</h3>
              <p className="text-gray-700">Students fill details, pay, and instantly receive PDF receipts via email — all automated.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="bg-white p-6 rounded-3xl shadow-2xl hover:scale-105 transform transition-all duration-500"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <img src={feature3} alt="Responsive" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold mb-2 text-yellow-600">Fully Responsive</h3>
              <p className="text-gray-700">Works beautifully on mobile, tablet, and desktop — school projects and real-world ready.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-yellow-500 text-white text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to revolutionize your association payments?
        </motion.h2>
        <motion.a 
          href="/register"
          className="inline-block px-10 py-4 rounded-full bg-yellow-400 text-black font-semibold shadow-2xl hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Get Started Now
        </motion.a>
      </section>
    </main>
  )
}
