import React, { Component } from 'react'
import './shipping-details.css'

export default class ShippingDetails extends Component {

  componentDidUpdate() {
    this.selectionShippingOption()
  }

  selectionShippingOption = () => {
    const twoDay = document.getElementById('shipping-twoDay')
    const twoDayFlat = document.getElementById('shipping-twoDayFlat')
    const standard = document.getElementById('shipping-standard')
    if(standard) {
      standard.setAttribute("checked", "checked")
    } else if (twoDayFlat) {
      twoDayFlat.setAttribute("checked", "checked")
    } else if (twoDay) {
      twoDay.setAttribute("checked", "checked")
    }
  }

  render() {
    const { shippingOptions, handleOptionChange } = this.props
    const displayOptions = shippingOptions.map(option => {
      const deliveryType = Object.keys(option)[0]
      const price = Object.values(option)
      console.log(price)
      const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      const deliveryDate = () => {
        const date = new Date(Date.now())              
        let daysToAdd = 0
        const shipDate = (daysToAdd) => {
          return new Date(date.setDate(date.getDate() + daysToAdd))
        }
        let finalShipDate = (shipDate) => {
          return new Date(shipDate).toLocaleDateString('en-US',  dateOptions)
        }
        if(deliveryType === "twoDay") {
          daysToAdd = 1
          if(shipDate(daysToAdd).getDay() === 6) {
            daysToAdd = daysToAdd + 1
            return finalShipDate(shipDate(daysToAdd))
          }
          return finalShipDate(shipDate(daysToAdd))
        }
        if(deliveryType === "twoDayFlat") {
          daysToAdd = 2
          if(shipDate(daysToAdd).getDay() === 6) {
            daysToAdd = daysToAdd + 1
            return finalShipDate(shipDate(daysToAdd))
          }
          return finalShipDate(shipDate(daysToAdd))
        }
        if(deliveryType === "standard") {
          daysToAdd = 4
          if(shipDate(daysToAdd).getDay() === 6) {
            daysToAdd = daysToAdd + 1
            return finalShipDate(shipDate(daysToAdd))
          }
          return finalShipDate(shipDate(daysToAdd))
        }
      }

      const deliveryDesc = () => {
        if(deliveryType === "twoDay") {
          return "Two Day Delivery"
        }
        if(deliveryType === "twoDayFlat") {
          return "2-4 Day Delivery"
        }
        if(deliveryType === "standard") {
          return "2-6 Day Standard Delivery"
        }
      }
      
      return (
        <div className="shipping-option-con">
          <label htmlFor={`shipping-${deliveryType}`}></label>
          <input 
            id={`shipping-${deliveryType}`}
            type="radio"
            name="shipping-option"
            value={`${price}`}
            onChange={e => handleOptionChange()}
          />
          <div className="shipping-info-desc-con">
            <span>{deliveryDate()}</span>
            <span>{deliveryDesc()}</span>
          </div>
        </div>
      )
    })

    return (
      <section className="shipping-details-sec">
        {displayOptions}
      </section>
    )
  }
}