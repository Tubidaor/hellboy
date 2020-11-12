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
              <img className="cart-item-img" src={item.src}/>
            </div>
            <div className="cart-info-con">
              <p>{item.description}</p>
              <div><span>Price:</span>{item.price}</div>
              <div><span>Size:</span>{item.size}</div>
              {item.color && <div><span>Color:</span>{item.color}</div>}
            </div>
          </div>
          <div className="quantity-con">
            <button onClick={e => props.subtractQuantity(cart.indexOf(item))}>-</button>
            <div>{item.quantity}</div>
            <button onClick={e => props.addQuantity(cart.indexOf(item))}>+</button>
            <button onClick={e => props.deleteItem(cart.indexOf(item))}>Del</button>
          </div>
        </li>
      )}
    )
    return (
      <section className="cart-item-sec">
        <ul className="cart-item-ul">
          {displayItemSummary}
        </ul>
      </section>
    )
}