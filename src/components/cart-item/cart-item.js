import './cart-item.css'

export default function CartItems(props) {

  const { cart } = props

  console.log(cart)

  //when customer adds product to cart, send to session storage
  //when cart loads, load session storage data
  //when custumer leaves, load to database for pending cart?
    const displayItemSummary = cart.map(item => {
      return ( 
        <li className="cart-item">
          <div className="cart-item-top-con">
            <div className="cart-img-con">
              <img className="cart-item-img" src={item.itemSrc}/>
            </div>
            <div className="cart-info-con">
              <p>{item.itemDesc}</p>
              <div><span>Price:</span>{item.itemPrice}</div>
              <div><span>Size:</span>{item.itemSize}</div>
              {item.itemColor && <div><span>Color:</span>{item.itemColor}</div>}
            </div>
          </div>
          <div className="quantity-con">
            <button>Del</button>
            <div>{item.quantity}</div>
            <button>+</button>
          </div>
        </li>
      )}
    )
    return (
      <section className="cart-item-sec">
        <ul className="cart-item-ul">
          {displayItemSummary}
        </ul>
        <button className="checkout-btn" onClick={e => props.goToCheckout()}>Checkout</button>
      </section>
    )
}