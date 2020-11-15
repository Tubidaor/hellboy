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
      shippingRate: 0,
      deliveryDate: undefined,
      shippingOptions: []
    }
  }

  componentDidMount() {
    
    const cartItems = ProdServices.getCartFromSessionStorage()
    
    const customer = CustomerServices.getCustomerInfo()

    this.setState({
      customer,
      destinationZip: customer.zip
    })

    if(this.state.cart.length === 0) {
      console.log(this.state.cart)
      console.log('setting state')
      this.setState({
        cart: cartItems.items
      }, console.log(cartItems.items))
    }
  }
  componentWillUnmount() {
    ProdServices.emptyCart()
    ProdServices.saveCart(this.state.cart)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.destinationZip !== this.state.destinationZip) {
      const weight = this.calculateWeight(this.state.cart)
      const { destinationZip} = this.state
      // ShippingServices.getRates(weight.weight.pounds, weight.weight.ounces, destinationZip)
      // .then(data => {
        // let postage = data.RateV4Response.Package.Postage
        let postage = uspsResponse.RateV4Response.Package.Postage
        let shippingOptions = []
        // console.log(data)
        postage.forEach(ship => {
          // console.log(Object.values(ship.MailService))
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
        let shippingRate
        for(let i = 0; i < shippingOptions.length; i++) {
          if(Object.keys(shippingOptions[i]).includes("standard")) {
            shippingRate = Object.values(shippingOptions[i])
          } else if(Object.keys(shippingOptions[i]).includes("twoDayFlat")) {
            shippingRate = Object.values(shippingOptions[i])
          }
        }
        this.setState({
          shippingOptions,
          shippingRate
        })
      // })
    }
    if(this.state.deliveryDate === undefined) {
      this.setDefaultShipDate()
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
  
  handleOptionChange = (deliveryDate) => {
    const option = document.getElementsByName('shipping-option')
    let rate
    console.log(option[0].checked, option[1].checked, option[2].checked)
    for(let i = 0; i < option.length; i++) {
      if(option[i].checked) {
        rate = option[i].value
      }
    }
    this.setState({
      shippingRate: rate,
      deliveryDate
    }, console.log(deliveryDate))
  }

  setDefaultShipDate = () => {
    const twoDay = document.getElementById('span-twoDay')
    const twoDayFlat = document.getElementById('span-twoDayFlat')
    const standard = document.getElementById('span-standard')
    let defaultDeliveryDate
    if(standard) {
      defaultDeliveryDate = standard.textContent
    } else if(twoDayFlat) {
      defaultDeliveryDate = twoDayFlat.textContent
    } else if(twoDay) {
      defaultDeliveryDate = twoDay.textContent
    }
    this.setState({
      deliveryDate: defaultDeliveryDate
    },console.log(defaultDeliveryDate))
  }

  calculateTax = (taxes) => {
    return taxes
  }

  totalBeforeTaxes = (sale, shipping) => {
    return Number(sale) + Number(shipping)
  }

  orderTotal = (sale, shipping, taxes) => {
    return Number(this.totalBeforeTaxes(sale, shipping)) + Number(this.calculateTax(taxes))
  }

  addQuantity = (e, index) => {
    e.preventDefault()
    let {cart} = this.state
    console.log(cart[index].quantity)
    cart[index].quantity = ++cart[index].quantity
    this.setState({
      cart
    }, console.log(cart[index].quantity))
  }
  subtractQuantity = (e, index) => {
    e.preventDefault()
    let {cart} = this.state
    cart[index].quantity = --cart[index].quantity
    this.setState({
      cart
    })
  }
  deleteItem = (e, productIndex) => {
    e.preventDefault()
    let {cart} = this.state
    const afterDel = cart.filter(item => cart.indexOf(item) !== productIndex)
    console.log(cart, afterDel)
    this.setState({
      cart: afterDel
    })
  }

  render() {
    const { cart, customer, shippingOptions, shippingRate, deliveryDate } = this.state

    return (
      <main className="checkout-main">
        <header className="checkout-h1-header">
          <h1>Checkout</h1>
          <p>By placing your order you agree to the <Link to={"privacyNotice"}>
            privacy notice</Link> and <Link to={"/conditions"}>conditions of use.</Link>
          </p>
          <button className="checkout-btn" type="button">Place your order</button>
        </header>
        <OrderSummary
          totalSale={this.calculateTotalBeforeShipping(cart)}
          customer={customer}
          shippingRate={shippingRate}
          tax={this.calculateTax(0)}
          totalBeforeTaxes={this.totalBeforeTaxes(this.calculateTotalBeforeShipping(cart), shippingRate)}
          orderTotal={this.orderTotal(this.calculateTotalBeforeShipping(cart), shippingRate, this.calculateTax(0) )}
          deliveryDate={deliveryDate}
        />
        <form>

          <ShippingAddress customer={customer}/>
          <PaymentInfo/>
          <ShippingDetails
            shippingOptions={shippingOptions}
            handleOptionChange={this.handleOptionChange}
          />
          <CartItems
            cart={cart}
            addQuantity={this.addQuantity}
            subtractQuantity={this.subtractQuantity}
            deleteItem={this.deleteItem}
          />
          <button className="checkout-btn" type="button">Place your order</button>

        </form>
        <div>
          <p>Terms of service, etc.</p>
        </div>
      </main>
    )
  }
}