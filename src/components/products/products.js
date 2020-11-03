import React, { Component } from 'react'

import './products.css'

export default class Products extends Component {
  

  render() {
    return (
      <div className="product-con">
        <img
          id={this.props.id}
          className={this.props.class}
          src={this.props.shirt}
          alt={this.props.description}
          onClick={e => this.props.details(this.props.id)}
        />
        <div className="product-summary">
          <div >{this.props.price}</div>
          <p onClick={e => this.props.details(this.props.id)}>{this.props.description}</p>
        </div>
      </div>
    )
  }
}