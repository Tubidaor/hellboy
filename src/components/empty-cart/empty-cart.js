import './empty-cart.css'
import { Link } from 'react-router-dom'

export default function EmptyCart(props) {
  return (
    <section className="empty-cart-sec">
      <div className="empty-cart-message">
        <p>Your cart is empty</p>
        <p>Look for cool stuff</p>
        <button className="empty-cart-btn" type="button"><Link to="/login">Login</Link></button>
        <button className="empty-cart-btn" type="button"><Link to="/register">Sign Up</Link></button>
      </div>
    </section>
  )
}