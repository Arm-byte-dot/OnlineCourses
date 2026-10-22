import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Landing from './pages/Landing'
import About from './pages/About'
import Instructors from './pages/Instructors'
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path='/home' element={<Home/>} />
        <Route path="*" element={<h1>Eror 404 page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
