import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import EmptyCart from '../../components/empty-cart/empty-cart'
import './cart-page.css'
import CartItems from '../../components/cart-item/cart-item'
import { ProdServices } from '../../services/product-services'


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
    //if there is session storage, load it, otherwise, dont. if empty display nothing in cart
    const cartItems = ProdServices.getCartFromSessionStorage()

    if(this.state.cart.length === 0) {
      console.log(this.state.cart)
      console.log('setting state', cartItems.items)
      this.setState({
        cart: cartItems.items
      }, console.log(cartItems.items))
    }
  }

  componentWillUnmount() {
    console.log('unmounting')
    ProdServices.emptyCart()
    ProdServices.saveCart(this.state.cart)
  }
  goToCheckout = () => {
    const { history } = this.props
    //if logged in go to checkout. otherwise togo login-guest page
    const destination = "/checkout/login-guest"
    history.push(destination)
  }
  addQuantity = (index) => {
    let {cart} = this.state
    console.log(cart[index].quantity)
    cart[index].quantity = ++cart[index].quantity
    this.setState({
      cart
    }, console.log(this.state.cart[index].quantity))
  }
  subtractQuantity = (index) => {
    let {cart} = this.state
    cart[index].quantity = --cart[index].quantity
    this.setState({
      cart
    })
  }
  deleteItem = (productIndex) => {
    let {cart} = this.state
    const afterDel = cart.filter(item => cart.indexOf(item) !== productIndex)
    console.log(cart, afterDel)
    this.setState({
      cart: afterDel
    })
  }
  render() {
    const { cart } = this.state
    return (
      <main className="cart-page-main">
        <header className="cart-page-header">
          <h1 className="cart-page-h1">
            Your Cart
          </h1>
          { 
            cart.length !== 0 && 
            <button className="checkout-btn" onClick={e => this.goToCheckout()}>
              Checkout
            </button>
          }
        </header>
        <CartItems
          cart={cart}
          addQuantity={this.addQuantity}
          subtractQuantity={this.subtractQuantity}
          deleteItem={this.deleteItem}
        />
        { cart.length === 0 && <EmptyCart/> }
        {
          cart.length !== 0 &&
          <button className="checkout-btn" onClick={e => this.goToCheckout()}>
            Checkout
          </button>
        }
      </main>
    )
  }
}