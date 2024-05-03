import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    
        <div className="container">
            <div className="itmes">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/services">Services</Link>
                    <Link className="link" to="/contact">Contact</Link>
            </div>
            <div className="logo">
                <img src="./images/logo.png" alt="logo" />
                <span>sumurai</span>
            </div>
        </div>
    
  )
}

export default Navbar
