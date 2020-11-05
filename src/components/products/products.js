import './products.css'

export default function Products(props) {
  

    return (
      <div className="product-con">
        <img
          id={props.id}
          className={props.class}
          src={props.shirt}
          alt={props.description}
          onClick={e => props.details(props.id)}
        />
        <div className="product-summary">
          <div >{props.price}</div>
          <p onClick={e => props.details(props.id)}>{props.description}</p>
        </div>
      </div>
    )
  
}