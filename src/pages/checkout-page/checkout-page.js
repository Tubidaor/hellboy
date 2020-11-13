import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartItems from '../../components/cart-item/cart-item'
import OrderSummary from '../../components/order-summary/order-summary'
import PaymentInfo from '../../components/payment-info/payment-info'
import ShippingAddress from '../../components/shipping-address/shipping-address'
import ShippingDetails from '../../components/shipping-details/shipping-details'
import './checkout-page.css'
import { CustomerServices, ProdServices, ShippingServices } from '../../services/product-services'
import  { uspsResponse }  from './jsonresponse.js'

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
      customer: {},
      destinationZip: null,
      shippingOption: 'Standard',
      standardRate: null,
      priorityRate: null,
      shippingOptions: []
    }
  }

  componentDidMount() {

    const cart = ProdServices.getCartFromSessionStorage()
      this.setState({
        cart: cart.items
      })
    const customer = CustomerServices.getCustomerInfo()

    this.setState({
      customer,
      destinationZip: customer.zip
    })
    
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.destinationZip !== this.state.destinationZip) {
      console.log('calculating weight')
      const weight = this.calculateWeight(this.state.cart)
      const { destinationZip} = this.state
      console.log('this is the weight', weight.weight.pounds)
      // ShippingServices.getRates(weight.weight.pounds, weight.weight.ounces, destinationZip)
      // .then(data => {
        // let postage = data.RateV4Response.Package.Postage
        let postage = uspsResponse.RateV4Response.Package.Postage
        let shippingOptions = []
        // console.log(data)
        postage.forEach(ship => {
          console.log(Object.values(ship.MailService))
          if(Object.values(ship.MailService).includes("First-Class&lt;sup&gt;&#8482;&lt;/sup&gt; Package Service")) {
            shippingOptions.push({standard: ship.CommercialRate._text})
          }
          if(Object.values(ship.MailService).includes("Priority Mail Express 1-Day&lt;sup&gt;&#8482;&lt;/sup&gt; Flat Rate Envelope")) {
            shippingOptions.push({twoDay: ship.CommercialRate._text})
          }
          if(Object.values(ship.MailService).includes("Priority Mail 2-Day&lt;sup&gt;&#8482;&lt;/sup&gt; Flat Rate Envelope")) {
            shippingOptions.push({twoDayFlat: ship.CommercialRate._text})
          }
        })
        this.setState({
          shippingOptions
        }, console.log('these are the rates', shippingOptions))
      // })
    }
  }
  calculatePoundsOunces = (weight) => {
    const totalOunces = weight.ounces
    const pounds = totalOunces / 16
    const ounces = Math.round(((pounds % 1) * 16), 1)
    const totalPounds = weight.pounds + Math.round(pounds,0)
    this.setState({
      weight: {
        pounds: totalPounds,
        ounces: ounces
      }
    })
    return {
      weight: {
        pounds: totalPounds,
        ounces: ounces
      }
    }
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

      totalWeight = {
        pounds: totalWeight.pounds + pounds,
        ounces: totalWeight.ounces + ounces
      }
    })
    return this.calculatePoundsOunces(totalWeight)
  }

  calculateTotalBeforeShipping = (cart) => {
    let sum = 0
    cart.forEach(item => {
      const totalSale = item.price * item.quantity
      sum = sum + totalSale
    });
    return sum
  }
  
  render() {
    const { cart, customer, shippingOptions } = this.state

    const bill = {
      pretax: 25,
      shipping: 5
    }
    console.log(this.calculateTotalBeforeShipping(cart))
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
          <ShippingDetails shippingOptions={shippingOptions}/>
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