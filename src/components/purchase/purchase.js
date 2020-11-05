import React, { Component } from 'react'
import './purchase.css'

export default class Purchase extends Component {

  render() {
    const { product } = this.props
    const { size } = this.props
    console.log(size, product)
    function renderQuantityAvailable(size) {
      console.log(size, product.sizes[size])
      let quantity = product.sizes[size]
      let options = []
      for(let i = 1; i <= quantity; i++) {
        options.push(i)
      }
      const displayQuantityAvailable = options.map(option => 
        <option value={option}>{option}</option>
      )

      return displayQuantityAvailable
    }

    return (
      <section className="purchase-con">
        <div className="price-quantity-con">
          <span>Price: {product.price}</span>
          <span>
            Quantity: <select>{renderQuantityAvailable(size)}</select>
          </span>
        </div>
        <div className="purchase-btn-con">
          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="buy-now-btn">Buy Now</button>  
        </div>
      </section>
    )
  }
}