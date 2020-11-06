import './order-summary.css'

export default function OrderSummary(props) {
  const { bill, customer } = props

  function totalBeforeTaxes(pretax, shipping) {
    return pretax + shipping
  }
  function calculateShipping(location, weight) {
    // will need to find shipping data to calculate shipping weight and location
    
    return location + weight
  }
  function calculateTax() {
    return 0
  }
  function orderTotal(totalBeforeTaxes, taxes) {
    const total = totalBeforeTaxes + taxes
    return total
  }
  //taxes have to be collected if revenue goes to a certain point thereby \
  //creating nexus. In california the threshold is 100k and evidentaly 500k as 
  // of 2019. Therefore no taxes need to be collected at this time.
  return (
    <section className="order-summary-sec">
      <div className="shipping-info-con">
        <p>
          <span>Shipping to:</span>
          {customer.firstName}{" "}{customer.lastName}
        </p>
        <p>
          {customer.address}
        </p>
        <p><span>Estimated Delivery:</span>{'TBD'}</p>
      </div>
      <div>
        <table className="order-summary-table">
          <tbody>
            <tr>
              <td>
                <span>Items:</span>
              </td>
              <td>
                {bill.pretax}
              </td>
            </tr>
            <tr>
              <td>
                <span>Shipping and Handling:</span>
              </td>
              <td>
                {calculateShipping(3,4)}
              </td>
            </tr>
            <tr>
              <td>
                <span>Total before taxes:</span>
              </td>
              <td>
                {totalBeforeTaxes(bill.pretax, calculateShipping(3,4))}
              </td>
            </tr>
            <tr>
              <td>
                <span>Estimated Tax to be collected</span>
              </td>
              <td>
                {calculateTax()}
              </td>
            </tr>
            <tr>
              <td>
                <span>Order total:</span>
              </td>
              <td>
                {orderTotal(totalBeforeTaxes(bill.pretax, calculateShipping(3,4)), calculateTax())}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}