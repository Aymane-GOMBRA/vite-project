import Navbar from "./components/Navbar"
import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {
  return(
  <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </div>
  ) 
  
  
}

export default App
