import React, { Component } from 'react'
import './shipping-details.css'

export default class ShippingDetails extends Component {

  render() {
    const { shippingOptions } = this.props
    // console.log('dates', date, new Date(date.setDate(date.getDate() + 1)).toLocaleDateString('en-US', dateOptions))

    const displayOptions = shippingOptions.map(option => {
      const deliveryType = Object.keys(option)[0]
      const price = Object.keys(option)
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
      console.log(deliveryType[0], deliveryDate(deliveryType))
      return (
        <div className="shipping-option-con">
          <label htmlFor={`shipping-${deliveryType}`}></label>
          <input id={`shipping-${deliveryType}`} type="radio" name="shipping-option" value={`${price}`}/>
          <div className="shipping-info-desc-con">
            <span>{deliveryDate()}</span>
            <span>{deliveryDesc()}</span>
          </div>
        </div>
      )
    })
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
    let date = new Date(Date.now())


    return (
      <section className="shipping-details-sec">
        {/* <div className="shipping-option-con">
          <label htmlFor="shipping-two-day"></label>
          <input id="shipping-two-day" type="radio" id="shipping-two-day" name="shipping-option" value="1"/>
          <div className="shipping-info-desc-con">
            <span>Wednesday, Nov 11</span>
            <span>Two day shipping</span>
          </div>
        </div>
        <div className="shipping-option-con">
          <label htmlFor="shipping-standard"></label>
          <input id="shipping-two-day" type="radio" id="shipping-standard" name="shipping-option" value="2"/>
          <div className="shipping-info-desc-con">
            <span>Wednesday, Nov 17</span>
            <span>Standard shipping</span>
          </div>
        </div>
        <div className="shipping-option-con">
          <label htmlFor="shipping-expedited"></label>
          <input id="shipping-two-day" type="radio" id="shipping-expedited" name="shipping-option" value="1"/>
          <div className="shipping-info-desc-con">
            <span>Wednesday, Nov 12</span>
            <span>Expedited shipping</span>
          </div>
        </div> */}
        {displayOptions}
      </section>
    )
  }
}