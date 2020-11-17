import React, { Component } from 'react'
import './guest-checkout.css'
import ShippingAddressForm from '../../components/guest-checkout-details/shipping-address'
import  { uspsResponse }  from '../../pages/checkout-page/jsonresponse'
import ShippingDetails from '../../components/shipping-details/shipping-details'
import GuestCcInfo from '../../components/guest-cc-info/guest-cc-info'

export default class GuestCheckout extends Component {

  state = {
    page: 'address',
    name: null,
    address: null,
    email: null,
    shippingOptions: [],
    shippingRate: null,
    deliveryDate: null
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

  render() {
    const { page, shippingOptions, address } = this.state

    return (
      <main className="guest-checkout-main">
        {
          page === "address" &&
          <ShippingAddressForm
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
      </main>
    )
  }
}