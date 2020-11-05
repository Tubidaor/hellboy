import React, { Component } from 'react'
import EmptyCart from '../../components/empty-cart/empty-cart'
import './cart-page.css'

export default class CartPage extends Component {

  render() {
    return (
      <main className="cart-page-main">
        <h1 className="cart-page-h1">
          Your Cart
        </h1>
        <EmptyCart></EmptyCart>
      </main>
    )
  }
}