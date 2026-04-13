import { useState } from 'react'
import './App.css'
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Header from "./Header"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from "./Home"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
