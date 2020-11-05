import React, { Component } from 'react'
import './shop-page.css'
import Products from '../../components/products/products'
import { tshirts } from '../../data'

export default class ShopPage extends Component {
  defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      tshirts: tshirts
    }
  }

  handleRedirect = (productId) => {
    const redirect = `/products/${productId}`
    const { history } = this.props
    history.push(redirect)
  }

  render() {
    
    const displayTshirts = this.state.tshirts.map(tshirt => {
      return (
        <Products
          id={tshirt.id}
          class={"browsing-img"}
          price={tshirt.price}
          description={tshirt.description}
          shirt={tshirt.src.main.picture1}
          details={this.handleRedirect}
        />
        )
      }
    )

    return (
      <main className="shop-main">
        <h1 className="shop-h1">Swag</h1>
        <div className="browsing-con">
          {displayTshirts}
        </div>
      </main>
    )
  }
}