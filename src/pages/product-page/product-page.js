import React, { Component } from 'react'
import './product-page.css'
import { tshirts } from '../../data';
import ProductDetails from '../../components/product-details/product-details';
import SizingChart from '../../components/sizing-chart/sizing-chart'

export default class ProductPage extends Component {
  defaultProps = {
    match: {
      params: {}
    }
  }

  findProduct = (products, productId) => {
    return products.filter(product => product.id == productId)[0]
  }
  render() {
    const { productId } = this.props.match.params
    const allProducts = tshirts
    const product = this.findProduct(allProducts, productId)
    console.log(product, productId)
    console.log(allProducts[1].id == productId)

    return (
      <main className="product-page-main">
        <h1>Product Details</h1>
        <ProductDetails
          product={product}
        />
        <SizingChart/>

      </main>
    )
  }
}