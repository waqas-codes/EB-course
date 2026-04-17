import './App.css'
import Signup from './components/Signup'
import Github from './components/Github'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './practice/Header'
import Home from './practice/Home'
import Contact from './practice/Contact'
import About from './practice/About'
import Users from './components/Users'

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
      <Route path='/github' element={<Github />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
