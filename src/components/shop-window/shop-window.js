import React, { Component } from 'react'
import './shop-window.css'
import { tshirts } from '../../data'
// import tshirt1 from '../../documents/t-shirt1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

export default class ShopWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tshirts: tshirts,
      index: 0
    }
  }

  componentDidMount() {
 
  }
  imgLeft = () => {
    let currentIndex = this.state.index
    const totalShirts = this.state.tshirts
    if(currentIndex === 0) {
      currentIndex = (totalShirts.length - 1)
    } else {
      --currentIndex
    }
      
    this.setState({
      index: currentIndex
  })}

  imgRight = () => {
    let currentIndex = this.state.index
    const totalShirts = this.state.tshirts
    if(currentIndex === (totalShirts.length - 1)) {
      console.log('gotoend')
      currentIndex = 0
    } else {
      ++currentIndex
    }
    this.setState({
      index: currentIndex
    })
  }


  render() {

    const shirt = this.state.tshirts
    const { index } = this.state
    return(
      <div className="window-shop-con">
        {/* {displayTshirts} */}
        <img
          id={shirt[index].id}
          className="window-img"
          src={shirt[index].src.main.picture1}
          alt={shirt[index].description}
          onClick={e => this.props.goToProductDetail(shirt[index].id)}
        />
        <div className="left-arrow" onClick={this.imgLeft}>
          <FontAwesomeIcon className="chevron-left" icon={faChevronLeft}/>
        </div>
        <div className="right-arrow" onClick={this.imgRight}>
          <FontAwesomeIcon className="chevron-right" icon={faChevronRight}/>
        </div>
      </div>
    )
  }
}