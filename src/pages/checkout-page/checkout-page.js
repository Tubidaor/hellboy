import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartItems from '../../components/cart-item/cart-item'
import OrderSummary from '../../components/order-summary/order-summary'
import PaymentInfo from '../../components/payment-info/payment-info'
import ShippingAddress from '../../components/shipping-address/shipping-address'
import ShippingDetails from '../../components/shipping-details/shipping-details'
import './checkout-page.css'
import { ProdServices, ShippingServices } from '../../services/product-services'

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
      cart: [],
      weight: {
        pounds: 0,
        ounces: 0
      },
      shippingOption: 'Standard'
    }
  }

  componentDidMount() {

    const cart = ProdServices.getCartFromSessionStorage()
      console.log(this.state.cart)
      console.log('setting state')
      this.setState({
        cart: cart.items
      })
    // ShippingServices.getRates()
    //   .then(data => console.log(data))
      // this.calculateWeight(0,2,4,1)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.weight, this.state.weight)
    if(prevState.weight === this.state.weight) {
      this.calculateWeight(this.state.cart)
      
    }
  }
  calculatePoundsOunces = (weight) => {
    const totalOunces = weight.ounces
    const pounds = totalOunces / 16
    const ounces = Math.round(((pounds % 1) * 16), 1)
    console.log(pounds, Math.round(pounds, 0), ounces.toFixed(4), ounces)
    const totalPounds = weight.pounds + Math.round(pounds,0)
    this.setState({
      weight: {
        pounds: totalPounds,
        ounces: ounces
      }
    }, console.log(this.state.weight))
  }

  calculateWeight = (cart) => {
    //need to get quantity and weight of each product
    let totalWeight = {
      pounds: 0,
      ounces: 0
    }
    cart.forEach(item => {
      const pounds = item.weight.pounds * item.quantity
      const ounces = item.weight.ounces * item.quantity

      console.log(pounds, ounces)
      totalWeight = {
        pounds: totalWeight.pounds + pounds,
        ounces: totalWeight.ounces + ounces
      }
    })
    this.calculatePoundsOunces(totalWeight)
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

    console.log(this.state.weight)
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