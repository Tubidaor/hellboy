import React, { Component } from 'react'
import './shipping-details.css'

export default class ShippingDetails extends Component {

  render() {

    return (
      <section className="shipping-details-sec">
        <div className="shipping-option-con">
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
        </div>
      </section>
    )
  }
}