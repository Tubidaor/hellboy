import './shipping-address.css'

export default function ShippingAddress(props) {
  const {customer} = props
  return (
    <section className="shipping-address-sec">
      <div className="shipping-address-info-con">
        <p>
          <span>Shipping to:</span>
          {customer.first_name}{" "}{customer.last_name}
        </p>
        <p>
          {customer.address_line1}
        </p>
      </div>
      <div className="shipping-address-info-con">
        Add Delivery Instructions
      </div>
    </section>
  )
}