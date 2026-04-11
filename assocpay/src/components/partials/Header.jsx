import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const Router=useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink,setActiveLink]=useState('home')
   const access_token=localStorage.getItem("access_token")
   console.log('ACCESS_TOKEN', access_token)
  const handleLogout=()=>{
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    console.log('LOGGED OUT')
    setActiveLink('home')
    Router('/')
  }
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
              <Link
                to='/'
                className={`${activeLink=='home'?'text-yellow-400 border-b border-b-yellow-400':'text-white/90'}
                  hover:text-yellow-400
                  transition
                  relative
                  after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] after:bg-yellow-400
                  hover:after:w-full after:transition-all
                `}
                onClick={()=>setActiveLink('home')}
              >
                Home
              </Link>
              <Link
                to='/associations'
                className=
                  {`${activeLink=='associations'?'text-yellow-400 border-b border-b-yellow-400':'text-white/90'}
                  hover:text-yellow-400
                  transition
                  relative
                  after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] after:bg-yellow-400
                  hover:after:w-full after:transition-all
                  `}
                onClick={()=>setActiveLink('associations')}
              >
                Associations
              </Link>
              {access_token?(
              <Link
                to='/verify-receipt'
                className=
                  {`${activeLink=='verify receipt'?'text-yellow-400 border-b border-b-yellow-400':'text-white/90'}
                  hover:text-yellow-400
                  transition
                  relative
                  after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] after:bg-yellow-400
                  hover:after:w-full after:transition-all
                `}
                onClick={()=>setActiveLink('verify receipt')}
              >
                Verify Receipt
              </Link>):("")}
              {access_token?(
              <Link
                to='/'
                className="
                  text-white/90
                  hover:text-yellow-400
                  transition
                  relative
                  after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] after:bg-yellow-400
                  hover:after:w-full after:transition-all
                "
                onClick={handleLogout}
              >
                Logout
              </Link>
              ):(
                <Link
                to={'/signin'}
                className=
                  {`${activeLink=='login'?'text-yellow-400 border-b border-b-yellow-400':'text-white/90'}
                  hover:text-yellow-400
                  transition
                  relative
                  after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-[2px] after:bg-yellow-400
                  hover:after:w-full after:transition-all
                `}
                
             
              >
                Login
              </Link>
              )}
            {access_token ? (
            <Link
              to="/event"
              className="
                px-5 py-2 rounded-lg
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-purple-600 hover:to-indigo-600
                transition
                shadow-lg shadow-purple-900/40
                text-white
              "
              
              
            >
              Event
            </Link>
            ):(
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
            )}
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
            <>
              <Link
                to=''
                onClick={() => setMobileOpen(false)}
                className="
                  text-white/90
                  hover:text-yellow-400
                  hover:translate-x-1
                  transition-all duration-300
                  border-b border-white/10 pb-2
                "
              >
               Home
              </Link>
              <Link
              
                to={'/associations'}
                onClick={() => setMobileOpen(false)}
                className="
                  text-white/90
                  hover:text-yellow-400
                  hover:translate-x-1
                  transition-all duration-300
                  border-b border-white/10 pb-2
                "
              >
                Associations
              </Link>
              {access_token ? ( 
                <>
                  <Link
                  
                    to={'/verify-receipt'}
                    onClick={() => setMobileOpen(false)}
                    className="
                      text-white/90
                      hover:text-yellow-400
                      hover:translate-x-1
                      transition-all duration-300
                      border-b border-white/10 pb-2
                    "
                  >
                    Verify Receipt
                  </Link>
                  <Link
                  
                    to={'/verify-receipt'}
                    onClick={handleLogout}
                    className="
                      text-white/90
                      hover:text-yellow-400
                      hover:translate-x-1
                      transition-all duration-300
                      border-b border-white/10 pb-2
                    "
                  >
                    Log Out
                  </Link>
                </>):(
                  <Link
                    to={'/signin'}
                    onClick={() => setMobileOpen(false)}
                    className="
                      text-white/90
                      hover:text-yellow-400
                      hover:translate-x-1
                      transition-all duration-300
                      border-b border-white/10 pb-2
                    "
                  >
                  Log In
                  </Link>
                )}
              
            </>
            {access_token ? (  
              <Link
                to="/event"
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
                Event
              </Link>):(
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
              </Link>)}
          </div>
        </div>
      </nav>
    </header>
  );
}
