import { customer } from '../../data'
import CartItems from '../cart-item/cart-item'
import OrderSummary from '../order-summary/order-summary'
import PaymentInfo from '../payment-info/payment-info'
import ShippingAddress from '../shipping-address/shipping-address'
import './review-order.css'

export default function ReviewOrder(props) {
  const { cart, customer } = props
  return (
    <section className="review-order-sec">
      <button>Place Order</button>
      <div>
        <p>Shipping Method:<span>{props.shipMethod}</span></p>
      </div>
      <CartItems cart={cart}></CartItems>
      <ShippingAddress customer={customer}/>
      <PaymentInfo/>
      <OrderSummary customer={customer}/>
      <button>Place Order</button>

    </section>
  )
}