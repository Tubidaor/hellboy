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
    return products.filter(product => product.id === productId)
  }
  render() {
    const productId = this.props.match.params
    const allProducts = tshirts
    const product = this.findProduct(allProducts, productId)
    console.log(product, this.props.match.params)

    return (
      <main className="product-page-main">
        <div>hello world</div>
        <ProductDetails
          description={product.description}
          src={product.src}
          />

      </main>
    )
  }
}