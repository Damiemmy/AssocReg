import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./components/auth/login"
import Signup from "./components/auth/signup"
import Header from './components/partials/Header.jsx'
import Footer from './components/partials/Footer.jsx'
import LandingPage from "./components/base/homepage.jsx"
import Association from "./components/base/association.jsx"
import Receipt from "./components/base/receipt.jsx"
import Event from "./components/base/event.jsx"
import NotFound from "./components/base/notFound.jsx"

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <div className="w-full bg-white h-full">
    <Routes>
      <Route index path="/" element={<LandingPage/>}/>
      <Route path="/signin"  element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/associations" element={<Association />}/>
      <Route path="/verify-receipt" element={<Receipt />}/>
      <Route path="/event" element={<Event/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
    <Footer/>
   
    </BrowserRouter>
    
  )
}

export default App
