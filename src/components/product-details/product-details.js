import React, { Component } from 'react'
import './product-details.css'

export default class ProductDetails extends Component {

  render() {
    return (
      <section className="product-details-sec">
        <p>{this.props.description}</p>
        <img className="details-img" src={this.props.src} alt={this.props.alt}></img>

      </section>
    )
  }
}