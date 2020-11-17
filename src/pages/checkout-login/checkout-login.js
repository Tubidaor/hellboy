import React, { Component } from 'react'
import LoginForm from '../../components/login-form/login-form'
import './checkout-login.css'

export default class CheckoutLogin extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  handleGuestCheckout = () => {
    const { history } = this.props
    const destination = "/checkout/guest"
    history.push(destination)
  }
  render() {
    return (
      <main>
        <section className="login-section">
          <LoginForm></LoginForm>
        </section>
        <section className="guest-checkout">
          <button className="guest-checkout-btn" onClick={e => this.handleGuestCheckout()}>Check out as guest</button>
        </section>
      </main>
    )
  }
}