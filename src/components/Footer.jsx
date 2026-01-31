import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Accutron Electronics — accutron.eu</div>
        <div>Contact: info@accutron.eu • +358 400587345</div>
      </div>
    </footer>
  )
}
