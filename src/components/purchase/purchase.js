import React, { Component } from 'react'
import './purchase.css'

export default class Purchase extends Component {

  

  render() {
    const { product } = this.props
    const {
      size,
      quantity,
      handleProductAvailable,
      handleProductNotAvailable
    } = this.props
    console.log(size, product, quantity)
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
      if(quantity > 0) {
        console.log('product should have updated')
        handleProductAvailable()
      } else if(quantity === 0) {
        console.log('quantity is 0')
        handleProductNotAvailable()
      }
      return displayQuantityAvailable
    }

    console.log(size)
    return (
      <section className="purchase-con">
        <div className="price-quantity-con">
          <span>Price: {product.price}</span>
          <span>
            Quantity:
              <select
                id="quantity-selection"
                onChange={e => this.props.handleQuantityChange()}
              > 
                {quantity === 0 && <option value="0">0</option> }
                {renderQuantityAvailable(size)}
              </select>
          </span>
        </div>
        <div className="purchase-btn-con">
          <button className="add-to-cart-btn" onClick={e => this.props.addToCart()}>Add to Cart</button>
          <button className="buy-now-btn">Buy Now</button>  
        </div>
      </section>
    )
  }
}