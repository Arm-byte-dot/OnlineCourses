import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import About from './pages/About'
import Instructors from './pages/Instructors'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/instructors" element={<Instructors />} />
        <Route path="*" element={<h1>Eror 404 page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
