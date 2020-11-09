// import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Nav() {
  return (
    //Vinc Pichel
    <header className="nav-con">
      <div className="sign-in-cart-icon-con">
        <Link to={'/login'}>Login</Link>
        <Link to={'/cart'}>Cart</Link>
      </div>
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
          <li className="twitter">
            <a><FontAwesomeIcon icon={faTwitter}/></a>
          </li>
          <li className="instagram">
            <a><FontAwesomeIcon icon={faInstagram}/></a>
          </li>
          <li className="facebook">
            <a><FontAwesomeIcon icon={faFacebookSquare}/></a>
          </li>
        </ul>
      </div>
    </header>
  )
}