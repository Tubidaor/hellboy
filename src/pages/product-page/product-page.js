import React, { Component } from 'react'
import './product-page.css'
import { tshirts } from '../../data';
import ProductDetails from '../../components/product-details/product-details'
import SizingChart from '../../components/sizing-chart/sizing-chart'
import Purchase from '../../components/purchase/purchase'
import ProductMiscInfo from '../../components/product-misc-info/product-misc-info'

export default class ProductPage extends Component {
  defaultProps = {
    match: {
      params: {}
    }
  }
  state = {
    currentSize: 'null'
  }

  findProduct = (products, productId) => {
    return products.filter(product => product.id == productId)[0]
  }

  handleSizeChange = (size) => {
    this.setState({
      currentSize: size
    })
  }

  render() {
    const { productId } = this.props.match.params
    const allProducts = tshirts
    const product = this.findProduct(allProducts, productId)
    console.log(product, this.state.currentSize)
    // console.log(allProducts[1].id == productId)

    return (
      <main className="product-page-main">
        <h1>Product Details</h1>
        <ProductDetails
          product={product}
          handleSizeChange={this.handleSizeChange}
        />
        <SizingChart/>
        <Purchase product={product} size={this.state.currentSize}/>
        <ProductMiscInfo />

      </main>
    )
  }
}