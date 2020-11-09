import React, { Component } from 'react'
import './product-page.css'
import { tshirts } from '../../data';
import ProductDetails from '../../components/product-details/product-details'
import SizingChart from '../../components/sizing-chart/sizing-chart'
import Purchase from '../../components/purchase/purchase'
import ProductMiscInfo from '../../components/product-misc-info/product-misc-info'
import { ProdServices } from '../../services/product-services'

export default class ProductPage extends Component {
  defaultProps = {
    match: {
      params: {}
    }
  }
  state = {
    product: null,
    currentSize: 'null',
    currentColor: 'main'
  }

  componentDidMount()  {
    const { productId } = this.props.match.params
    console.log(ProdServices.getProduct(productId))
    const product = ProdServices.getProduct(productId)
    this.setState({
      product
    }, console.log(product))
  }
  // findProduct = (products, productId) => {
  //   return products.filter(product => product.id == productId)[0]
  // }

  handleSizeChange = (size) => {
    this.setState({
      currentSize: size
    })
  }

  addToCart = () => {
    console.log('added to cart')
    const { product } = this.state
    console.log(product)
    const itemToAdd = {
      id: product.id,
      size: this.state.size,
      color: this.state.currentColor
    }
    // const addToCart = produ
    // ProdServices.addToCart
  }
  handleColorChange = (color) => {
    this.setState({
      currentColor: color
    })
  }
  render() {
    // const allProducts = tshirts
    // const product = this.findProduct(allProducts, productId)
    // console.log(product, this.state.currentSize)
    // console.log(allProducts[1].id == productId)
    const { product, currentColor } = this.state

    return (
      <main className="product-page-main">
        <h1>Product Details</h1>
        { 
          product && 
          <ProductDetails
            product={product}
            currentColor={currentColor}
            handleSizeChange={this.handleSizeChange}
            handleColorChange={this.handleColorChange}
          />
        }
        <SizingChart/>
        {
          product &&
          <Purchase
            product={product}
            size={this.state.currentSize}
            addToCart={this.addToCart}
          />
        }
        <ProductMiscInfo />

      </main>
    )
  }
}