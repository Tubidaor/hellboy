import './shipping-address.css'

export default function ShippingAddress(props) {
  const {customer} = props
  return (
    <section className="shipping-address-sec">
      <div className="shipping-address-info-con">
        <p>
          <span>Shipping to:</span>
          {customer.firstName}{" "}{customer.lastName}
        </p>
        <p>
          {customer.address}
        </p>
      </div>
      <div className="shipping-address-info-con">
        Add Delivery Instructions
      </div>
    </section>
  )
}