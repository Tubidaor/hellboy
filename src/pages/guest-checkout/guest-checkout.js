import React, { Component } from 'react'
import './guest-checkout.css'
import ShippingAddressForm from '../../components/guest-checkout-details/shipping-address-form'
import  { uspsResponse }  from '../../pages/checkout-page/jsonresponse'
import ShippingDetails from '../../components/shipping-details/shipping-details'
import GuestCcInfo from '../../components/guest-cc-info/guest-cc-info'
import ReviewOrder from '../../components/review-order/review-order'
import { ProdServices } from '../../services/product-services'

export default class GuestCheckout extends Component {

  state = {
    page: 'address',
    cart: [],
    name: {},
    address: {},
    email: null,
    shippingOptions: [],
    shippingRate: null,
    deliveryDate: null
  }

  componentDidMount() {
    const cartItems = ProdServices.getCartFromSessionStorage()
    
    // const customer = CustomerServices.getCustomerInfo()

    // this.setState({
    //   customer,
    //   destinationZip: customer.zip
    // })

    if(this.state.cart.length === 0) {
      console.log(this.state.cart)
      console.log('setting state')
      this.setState({
        cart: cartItems.items
      }, console.log(cartItems.items))
    }
  }
  

  componentDidUpdate(prevProps, prevState) {
    if((prevState.page !== this.state.page) && (this.state.page === "shipping")) {

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
  }

  handleAddressSubmission = (e, shippingInfo) => {
    const { name, address, email } = shippingInfo
    e.preventDefault()
    this.setState({
      page: 'shipping',
      name,
      address,
      email
    })
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

  handleShipppingSubmission = (e) => {
    e.preventDefault()
    this.setState({
      page: "payment"
    })
  }
  handleCcSub = (e) => {
    e.preventDefault()
    this.setState({
      page: "review"
    })
  }
  render() {
    const { cart, page, shippingOptions, address, name } = this.state
    const customer = { 
      first_name: name.first_name,
      last_name: name.last_name,
      address_line1: address.address_line1,
      address_line1: address.address_line2,
      city: address.city,
      state: address.state,
      zip: address.zip
    }
    console.log('customer', customer)
    return (
      <main className="guest-checkout-main">
        {
          page === "address" &&
          <ShippingAddressForm
            button={true}
            handleAddressSubmission={this.handleAddressSubmission}
          />
        }
        {
          page === "shipping" &&
          <form>
            <ShippingDetails
              shippingOptions={shippingOptions}
              handleOptionChange={this.handleOptionChange}
            />
            <button
              type="submit"
              onClick={e => this.handleShipppingSubmission(e)}
            >
              Continue
            </button>
          </form>
        }
        {
          page === "payment" &&
          <GuestCcInfo handleCcSub={this.handleCcSub} address={address}/>
        }
        {
          page === "review" &&
          <ReviewOrder cart={cart} customer={customer}/>
        }
      </main>
    )
  }
}