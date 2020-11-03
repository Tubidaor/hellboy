import React, { Component } from 'react'
import './product-details.css'

export default class ProductDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mainImage: null
    }
  }
  componentDidMount() {
    const { product } = this.props
    console.log(product)
    if(this.state.mainImage === null) {
      this.setState({mainImage: product.src.main.picture1})
    }
  }
  componentWillUnmount() {
    this.setState({
      mainImage: null
    })
  }

  render() {
    const { product } = this.props
    const  { mainImage } = this.state
    const previewImages = Object.entries(product.src.main).map(p =>
      <img className="product-preview-img" src={p[1]} alt={product.description}/>
    )
    console.log(previewImages)
    return (
      <section className="product-details-sec">
        <div className="preview-img-con">
          {previewImages}
        </div>
        <div className="product-details-main-img-con">
          <p>{product.description}</p>
          <img className="details-img" src={mainImage} alt={product.description}></img>
        </div>

      </section>
    )
  }
}