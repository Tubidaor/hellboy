import React, { Component } from 'react'
// import SizingChart from '../sizing-chart/sizing-chart'
import './product-details.css'

export default class ProductDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mainImage: null,
      currentColor: 'main',
      colors: [],
      size: 'Please Select Size'
    }
  }
  componentDidMount() {
    const { product } = this.props
    const availColors = Object.keys(product.src)
    if(this.state.mainImage === null) {
      this.setState({mainImage: product.src.main.picture1, colors: availColors})
    }
    console.log(product.id)
        // this.imageZoom("main-img", 'myresult')

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
    this.props.handleColorChange(color)
  }

  handleImgAndMainChange = (color, mainImage) => {
      this.setState({mainImage})
    return color
  }

  handleSizeChange = (size) => {
    this.setState({size: "Size:" + " " + size}, this.props.handleSizeChange(size))
  }
  imageZoom = (imgID, resultID) => {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  } 

  render() {
    const { product, currentColor } = this.props
    const  { mainImage, colors } = this.state
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
    const sizes = product.sizes
    const displaySizes = Object.entries(sizes).map(size => <div className={`size-${size[0]} size-box`} onClick={e => this.handleSizeChange(size[0])}>{size[0]}</div>)
      
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
          <img id="main-img" className="details-img" src={mainImage} alt={product.description}></img>
          {/* <div id="myresult" class="img-zoom-result"></div> */}
          <h2>Available Colors</h2>
          <div className="colors-preview">
            { 
              colors.includes('main') &&
              <div className='preview-main' onClick={e => (this.colorChange('main'), this.handleImgChange(mainMain()))}>
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
          <div className="sizes-con">
            {sizes && <span className="size-display">{this.state.size}</span>}
            {/* <div className='size-small'></div>
            <div className='size-medium'></div>
            <div className='size-large'></div>
            <div className='size-xlarge'></div> */}
            <div className="size-sel-con">
              {displaySizes}
            </div>
          </div>
        </div>
      </section>
    )
  }
}