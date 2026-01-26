import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./components/auth/login"
import Signup from "./components/auth/signup"
import Header from './components/partials/Header.jsx'
import Footer from './components/partials/Footer.jsx'
import LandingPage from "./components/base/homepage.jsx"

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index path="/" element={<LandingPage/>}/>
      <Route path="/login"  element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
    <Footer/>
   
    </BrowserRouter>
    
  )
}

export default App
