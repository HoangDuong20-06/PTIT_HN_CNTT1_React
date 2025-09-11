
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import {Routes, Route } from 'react-router-dom'
export default function Outlet() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}
