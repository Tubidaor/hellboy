import React, { Component } from 'react'
import './product-page.css'
import { tshirts } from '../../data';
import ProductDetails from '../../components/product-details/product-details';

export default class ProductPage extends Component {
  defaultProps = {
    match: {
      params: {}
    }
  }

  findProduct = (products, productId) => {
    products.filter(product => product.id == productId)
    return products[0]
  }
  render() {
    const { productId } = this.props.match.params
    const allProducts = tshirts
    const product = this.findProduct(allProducts, productId)
    console.log(product)
    console.log(allProducts[0].id == productId)

    return (
      <main className="product-page-main">
        <h1>Product Details</h1>
        <ProductDetails
          description={product.description}
          src={product.src}
          alt={product.description}
        />

      </main>
    )
  }
}