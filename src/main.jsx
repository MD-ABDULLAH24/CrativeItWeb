import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Success from './pages/success/Success.jsx'
import Freelancing from './pages/freelancing/Freelancing.jsx'
import Contact from './pages/contact/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />
        <Route path="/freelancing" element={<Freelancing/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
