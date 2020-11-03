import React, { Component } from 'react'
import './product-details.css'

export default class ProductDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mainImage: null,
      currentColor: 'main' 
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
  handleImgChange = (mainImage) => {
    console.log('pic changed')
    this.setState({
      mainImage
    })
  }
  colorChange = (color) => {
    this.setState({
      currentColor: color
    })
  }
  handleImgAndMainChange = (color, mainImage) => {
      this.setState({mainImage})
    return color
  }
  render() {
    const { product } = this.props
    const  { mainImage, currentColor } = this.state
    
    
    // .map(col => console.log(col[1]))
    // .map(img => <img src={img[1]} alt={product.description + img[0]}/>)
    // previewColors.map(color => console.log(Object.entries(color[1])))
    // .map(img => <img src={img[1]} alt={product.description + color[0]}/>))
 
      const previewImages = Object.entries(product.src.main).map(p =>
        <img
          className="product-preview-img"
          src={p[1]}
          alt={product.description}
          onClick={e => this.handleImgChange(p[1])}
        />
      )
      const previewColors = Object.entries(product.src).slice(1)
      const black = Object.entries(previewColors[0][1]).map(col =>
        <img
          className="color-img"
          src={col[1]}
          onClick={e => this.handleImgChange(col[1])}
        />
      )
      const gray = Object.entries(previewColors[1][1]).map(col => 
        <img
          className="color-img"
          src={col[1]}
          onClick={e => this.handleImgChange(col[1])}
        />
      )
      const blue = Object.entries(previewColors[2][1]).map(col =>
        <img
          className="color-img"
          src={col[1]}
          onClick={e => this.handleImgChange(col[1])}
          />
        )
      const orange = Object.entries(previewColors[3][1]).map(col => 
        <img
          className="color-img"
          src={col[1]}
          onClick={e => this.handleImgChange(col[1])}
        />
      )
      const blackMain = previewColors[0][1].picture1
      const grayMain = previewColors[1][1].picture1
      const blueMain = previewColors[2][1].picture1
      const orangeMain = previewColors[3][1].picture1
      
    return (
      <section className="product-details-sec">
        <div className="preview-img-con">
            {currentColor === 'main' && previewImages}
            {currentColor === 'black' && black}
            {currentColor === 'gray' && gray}
            {currentColor === 'blue' && blue}
            {currentColor === 'orange' && orange}
        </div>
        <div className="product-details-main-img-con">
          <p>{product.description}</p>
          <img className="details-img" src={mainImage} alt={product.description}></img>
          <div className="colors-preview">
          <div className='preview-main' onClick={e => (this.colorChange('main'), this.handleImgChange(product.src.main.picture1))}>
            </div>
            <div className='preview-black' onClick={e => (this.colorChange('black'), this.handleImgChange(blackMain))}>
            </div>
            <div className='preview-gray' onClick={e => (this.colorChange('gray'), this.handleImgChange(grayMain))}>
            </div>
            <div className='preview-blue' onClick={e => (this.colorChange('blue'), this.handleImgChange(blueMain))}>
            </div>
            <div className='preview-orange' onClick={e => (this.colorChange('orange'), this.handleImgChange(orangeMain))}>
            </div>
          </div>
        </div>

      </section>
    )
  }
}