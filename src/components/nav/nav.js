// import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
  return (
    //Vinc Pichel
    <header className="nav-con">
      <div className="nav-ul-con">
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/shop">Swag</Link>
          </li>
        </ul>
      </div>
      <div className="social-ul-con">
        <ul className="social-ul">
          <li>
            <a>Twitter Icon</a>
          </li>
          <li>
            <a>IG Icon</a>
          </li>
          <li>
            <a>FB Icon</a>
          </li>
        </ul>
      </div>
    </header>
  )
}