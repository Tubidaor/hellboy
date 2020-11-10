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
    currentColor: 'main',
    quantity: 0
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
  componentDidUpdate() {
    console.log(this.state.quantity)
  }
  handleSizeChange = (size) => {
    this.setState({
      currentSize: size
    })
  }

  addToCart = () => {
    console.log('added to cart')
    const { product } = this.state
    const itemToAdd = {
      id: product.id,
      size: this.state.currentSize,
      color: this.state.currentColor,
      quantity: this.state.quantity,
      price: product.price
    }
    // const addToCart = produ
    ProdServices.addToCart(itemToAdd)
  }
  handleColorChange = (color) => {
    this.setState({
      currentColor: color
    })
  }
  handleQuantityChange = () => {
    const quantity = document.getElementById('quantity-selection')
    console.log(quantity.value)
    this.setState({
      quantity: quantity.value
    })
  }
  handleProductAvailable = () => {
      console.log('product updating started')
    if(this.state.quantity === 0) {
      console.log('product is updating')
      this.setState({
        quantity: 1
      })
    }
  }
  handleProductNotAvailable = () => {
    if(this.state.quantity > 0) {
      this.setState({
        quantity: 0
      })
    }
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
            quantity={this.state.quantity}
            size={this.state.currentSize}
            addToCart={this.addToCart}
            handleQuantityChange={this.handleQuantityChange}
            handleProductAvailable={this.handleProductAvailable}
            handleProductNotAvailable={this.handleProductNotAvailable}
          />
        }
        <ProductMiscInfo />

      </main>
    )
  }
}