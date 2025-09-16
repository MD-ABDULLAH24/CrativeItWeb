import React from 'react'
import "./App.css";
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <main className="min-h-screen">
      <Outlet/>
    </main>
    <footer>Footer</footer>
    </>
  )
}

export default App