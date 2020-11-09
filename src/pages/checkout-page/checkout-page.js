import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartItems from '../../components/cart-item/cart-item'
import OrderSummary from '../../components/order-summary/order-summary'
import PaymentInfo from '../../components/payment-info/payment-info'
import ShippingAddress from '../../components/shipping-address/shipping-address'
import ShippingDetails from '../../components/shipping-details/shipping-details'
import './checkout-page.css'
import { tshirts } from '../../data'

export default class CheckoutPage extends Component {
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
    const product = tshirts
    const cartItems = [
      {
        itemId: product[0].id,
        quantity: 1,
        itemSrc: product[0].src.black.picture1,
        itemDesc: product[0].description,
        itemPrice: product[0].price,
        itemColor: 'black',
        itemSize: 'small'
      },
      {
        itemId: product[3].id,
        quantity: 1,
        itemSrc: product[3].src.blue.picture1,
        itemDesc: product[3].description,
        itemPrice: product[3].price,
        itemColor: 'blue',
        itemSize: 'large'
      },
      {
        itemId: product[2].id,
        quantity: 2,
        itemSrc: product[2].src.orange.picture1,
        itemDesc: product[2].description,
        itemPrice: product[2].price,
        itemColor: 'orange',
        itemSize: 'medium'
      },
    ]
    if(this.state.cart.length === 0) {
      console.log(this.state.cart)
      console.log('setting state')
      this.setState({
        cart: cartItems
      })
    }
  }
  

  render() {
    const { cart } = this.state
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
        <form>

          <ShippingAddress customer={customer}/>
          <PaymentInfo/>
          <ShippingDetails/>
          <CartItems cart={cart}/>
          <button className="checkout-btn" type="button">Place your order</button>

        </form>
        <div>
          <p>Terms of service, etc.</p>
        </div>
      </main>
    )
  }
}