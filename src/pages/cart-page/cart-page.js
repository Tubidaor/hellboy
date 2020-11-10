import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import EmptyCart from '../../components/empty-cart/empty-cart'
import './cart-page.css'
import {tshirts} from '../../data'
import CartItems from '../../components/cart-item/cart-item'


export default class CartPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  componentDidMount() {
    console.log(this.state.cart == [])
    console.log([], this.state.cart, this.state.cart.length)
    //if there is session storage, load it, otherwise, dont. if empty display nothing in cart
    // const product = tshirts
    // const 
    // const cartItems = [
    //   {
    //     itemId: product[0].id,
    //     quantity: 1,
    //     itemSrc: product[0].src.black.picture1,
    //     itemDesc: product[0].description,
    //     itemPrice: product[0].price,
    //     itemColor: 'black',
    //     itemSize: 'small'
    //   },
    //   {
    //     itemId: product[3].id,
    //     quantity: 1,
    //     itemSrc: product[3].src.blue.picture1,
    //     itemDesc: product[3].description,
    //     itemPrice: product[3].price,
    //     itemColor: 'blue',
    //     itemSize: 'large'
    //   },
    //   {
    //     itemId: product[2].id,
    //     quantity: 2,
    //     itemSrc: product[2].src.orange.picture1,
    //     itemDesc: product[2].description,
    //     itemPrice: product[2].price,
    //     itemColor: 'orange',
    //     itemSize: 'medium'
    //   },
    // ]
    // if(this.state.cart.length === 0) {
    //   console.log(this.state.cart)
    //   console.log('setting state')
    //   this.setState({
    //     cart: cartItems
    //   })
    // }
  }
  goToCheckout = () => {
    const { history } = this.props
    const destination = "/checkout"
    history.push(destination)
  }

  render() {
    return (
      <main className="cart-page-main">
        <header className="cart-page-header">
          <h1 className="cart-page-h1">
            Your Cart
          </h1>
          <button className="checkout-btn" onClick={e => this.goToCheckout()}>
              Checkout
          </button>
        </header>
        <CartItems cart={this.state.cart}/>
        <EmptyCart></EmptyCart>
        <button className="checkout-btn" onClick={e => this.goToCheckout()}>
              Checkout
        </button>
      </main>
    )
  }
}