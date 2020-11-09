import './payment-info.css'

export default function PaymentInfo(props) {
  return (
    <section className="payment-info-sec">
      <header>
        <h2>Payment information</h2>
      </header>
      <div className="payment-info-div">
        <header>
          <h3>Payment method</h3>
        </header>
        <p>Mastercard ending in {3092}</p>
      </div>
      <div className="payment-info-div">
        <header>
          <h3>Billing address</h3>
        </header>
        <p>Same as shipping address</p>
      </div>
    </section>
  )
}