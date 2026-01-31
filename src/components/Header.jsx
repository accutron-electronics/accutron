import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/accutron-logo.png'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="brand">
          <img src={logo} alt="Accutron logo" className="logo" />
          <div className="brand-text">accutron.eu</div>
        </div>
        <nav className="nav">
          <NavLink to="/" className={({isActive})=>isActive? 'active':''}>Home</NavLink>
          <NavLink to="/drones" className={({isActive})=>isActive? 'active':''}>Drones</NavLink>
          <NavLink to="/electronics-design" className={({isActive})=>isActive? 'active':''}>Electronics Design</NavLink>
          <NavLink to="/acoustics-design" className={({isActive})=>isActive? 'active':''}>Acoustics Design</NavLink>
          <NavLink to="/links" className={({isActive})=>isActive? 'active':''}>Links</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'active':''}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
