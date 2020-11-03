import React, { Component } from 'react'
import './product-page.css'
import shirts from '../../data';

export default class ProductPage extends Component {
  defaultProps = {
    match: {
      params: {}
    }
  }

  findProduct = (products, productId) => {
    return products.filter(product => product.id === productId)
  }
  render() {
    const productId = this.props.match.params
    const allProducts = shirts
    const product = this.findProduct(allProducts, productId)

    return (
      <main className="product-page-main">
        {product.description}
        {product.price}
        {}

      </main>
    )
  }
}