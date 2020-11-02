import React, { Component } from 'react'
import './shop-window.css'
import { tshirts } from '../../data'
// import tshirt1 from '../../documents/t-shirt1.jpg'

export default class ShopWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tshirts: tshirts
    }
  }

  getImage = (path) => {
    return require(`${path}`)
  }
  render() {

    const displayTshirts = this.state.tshirts.map(tshirt => {
        return (
        <img src={tshirt.src} alt={tshirt.description}/>
        )
      }
    )

    return(
      <div className="window-shop-con">
        {displayTshirts}
        {/* <img src={tshirt1}/> */}
        <div className="left-arrow">{"<"}</div>
        <div className="right-arrow">{">"}</div>
      </div>
    )
  }
}