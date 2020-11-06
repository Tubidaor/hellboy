import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OrderSummary from '../../components/order-summary/order-summary'
import ShippingAddress from '../../components/shipping-address/shipping-address'
import './checkout-page.css'

export default class CheckoutPage extends Component {

  

  render() {
    const customer = {
      firstName: 'Juan',
      lastName: 'Baltazar',
      address: '26810 Alcott Ct, Stevensons Ranch CA, 91381'
    }
    const bill = {
      pretax: 25,
      shipping: 5
    }

    return (
      <main className="checkout-main">
        <header className="checkout-h1-header">
          <h1>Checkout</h1>
          <p>By placing your order you agree to the <Link to={"privacyNotice"}>
            privacy notice</Link> and <Link to={"/conditions"}>conditions of use.</Link>
          </p>
          <button className="checkout-btn" type="button">Place your order</button>
        </header>
        <OrderSummary bill={bill} customer={customer}/>
        <ShippingAddress customer={customer}/>
      </main>
    )
  }
}