import React from 'react'
import "./App.css";
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer';
import Payment from './components/Payment';

const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <main className="min-h-screen">
      <Outlet/>
    </main>
    <Footer/>
    <Payment/>
    </>
  )
}

export default App