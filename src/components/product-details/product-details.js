import React, { Component } from 'react'
import './product-details.css'

export default class ProductDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mainImage: null,
      currentColor: 'main',
      colors: []
    }
  }
  componentDidMount() {
    const { product } = this.props
    const availColors = Object.keys(product.src)
    if(this.state.mainImage === null) {
      this.setState({mainImage: product.src.main.picture1, colors: availColors})
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
    const  { mainImage, currentColor, colors } = this.state
    const handleImgChange = this.handleImgChange
    
    function mainImages() {
      const mainImages = product.src.main
      if(mainImages === undefined) {
        return
      } else {
        return Object.entries(mainImages).map(col =>
          <img
            className="product-preview-img"
            src={col[1]}
            alt={product.description}
            onClick={e => handleImgChange(col[1])}
          />
        )
      }
    }
    
    function blackColor() {
      const black = product.src.black
      if(black === undefined) {
        return
      } else {
        return Object.entries(black).map(col =>
          <img
            className="color-img"
            src={col[1]}
            onClick={e => handleImgChange(col[1])}
          />
        )
      } 
    }

    function grayColor() {
      const gray = product.src.gray
      if(gray === undefined) {
        return
      } else {
        return Object.entries(gray).map(col =>
          <img
            className="color-img"
            src={col[1]}
            onClick={e => handleImgChange(col[1])}
          />
        )
      } 
    }

    function blueColor() {
      const blue = product.src.blue
      if(blue === undefined) {
        return
      } else {
          return Object.entries(blue).map(col =>
            <img
              className="color-img"
              src={col[1]}
              onClick={e => handleImgChange(col[1])}
            />
          )
      }
    }

    function orangeColor() {
      const orange = product.src.orange
      if(orange === undefined) {
        return
      } else {
          return Object.entries(orange).map(col =>
            <img
              className="color-img"
              src={col[1]}
              onClick={e => handleImgChange(col[1])}
            />
          )
      }
    }
    const mainMain = () => { return colors.includes('black') ? product.src.main.picture1 : ''}
    const blackMain = () => { return colors.includes('black') ? product.src.black.picture1 : ''}
    const grayMain = () => { return colors.includes('gray') ? product.src.gray.picture1 : ''}
    const blueMain = () => { return colors.includes('blue') ? product.src.blue.picture1 : ''}
    const orangeMain = () => { return colors.includes('orange') ? product.src.orange.picture1 : ''}
      
    return (
      <section className="product-details-sec">
        <div className="preview-img-con">
            {currentColor === 'main' && mainImages()}
            {currentColor === 'black' && blackColor()}
            {currentColor === 'gray' && grayColor()}
            {currentColor === 'blue' && blueColor()}
            {currentColor === 'orange' && orangeColor()}
        </div>
        <div className="product-details-main-img-con">
          <p>{product.description}</p>
          <img className="details-img" src={mainImage} alt={product.description}></img>
          <div className="colors-preview">
            { 
              colors.includes('main') &&
              <div className='preview-main' onClick={e => (this.colorChange('main'), this.handleImgChange(product.src.main.picture1))}>
              </div>
            }
            { 
              colors.includes('black') &&
              <div className='preview-black' onClick={e => (this.colorChange('black'), this.handleImgChange(blackMain()))}>
              </div>
            }
            {
              colors.includes('gray') &&
              <div className='preview-gray' onClick={e => (this.colorChange('gray'), this.handleImgChange(grayMain()))}>
              </div>
            }
            {
              colors.includes('blue') &&
              <div className='preview-blue' onClick={e => (this.colorChange('blue'), this.handleImgChange(blueMain()))}>
              </div>
            }
            {
              colors.includes('orange') &&
              <div className='preview-orange' onClick={e => (this.colorChange('orange'), this.handleImgChange(orangeMain()))}>
              </div>
            }
          </div>
        </div>
      </section>
    )
  }
}