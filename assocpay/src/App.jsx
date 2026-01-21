import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./components/auth/login"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Login />}/>
    </Routes>
   
    </BrowserRouter>
    
  )
}

export default App
