import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Drones from './pages/Drones'
import Electronics from './pages/Electronics'
import Acoustics from './pages/Acoustics'
import Links from './pages/Links'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="site-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drones" element={<Drones />} />
          <Route path="/electronics-design" element={<Electronics />} />
          <Route path="/acoustics-design" element={<Acoustics />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
