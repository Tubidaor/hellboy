import ShippingAddress from '../shipping-address/shipping-address'
import './guest-cc-info.css'
import { MiscServices } from '../../services/misc-services'
import ShippingAddressForm from '../guest-checkout-details/shipping-address-form'

export default function GuestCcInfo(props) {


  const months = [
    "01 - January",
    "02 - February",
    "03 - March",
    "04 - April",
    "05 - May",
    "06 - June",
    "07 - July",
    "08 - August",
    "09 - September",
    "10 - October",
    "11 - November",
    "12 - December"
  ]

  function getSetYear(increment) {
    const now = new Date(Date.now())

    const year = new Date(now.setFullYear(now.getFullYear() + increment)).getFullYear()

    return year
  }
  
  const years = [
    getSetYear(0),
    getSetYear(1),
    getSetYear(2),
    getSetYear(3),
    getSetYear(4),
    getSetYear(5),
    getSetYear(6),
    getSetYear(7),
    getSetYear(8),
    getSetYear(9),
    getSetYear(10)
  ]

  function getCcData() {
    const number = document.getElementById('cc-num')
    const secCode = document.getElementById('cc-code')
    const month = document.getElementById("cc-month")
    const year = document.getElementById("cc-year")

    const ccInfo = {
      number,
      secCode,
      month,
      year
    }

    return ccInfo
  }

  const displayMonths = months.map(m => <option value={m.slice(0,3)}>{m}</option>)
  const displayYears = years.map(y => <option value={y}>{y}</option>)

  function shipCheckbox() {
    const sameAsShipping = document.getElementById("same-as-shipping")
    const shipCon = document.getElementById("ship-component-con")
    const billAdress = document.getElementById("bill-not-same-as-ship-con")

    if(sameAsShipping.checked === true) {
      shipCon.style.display = "block"
      billAdress.style.display = "none"
      sameAsShipping.setAttribute("checked", "")
    } else {
      shipCon.style.display = "none"
      billAdress.style.display = "block"
      sameAsShipping.setAttribute("checked", "checked")

    }
    
  }
  const transitionLabel = MiscServices.transitionLabel

  //will need to set up paypal and google pay account.

  return (
    <section className="cc-info-con">
      <form>
        <div className="cc-input-con">
          <label className="cc-num-label" id="cc-num-lab" htmlFor="cc-num" >
            Card Number*
          </label>
          <label className="cc-num-hidden" id="cc-num-hid" htmlFor="cc-num">
            Card Number*
          </label>
          <input
            type="text"
            id="cc-num"
            onFocus={e => transitionLabel("cc-num-lab", "cc-num-hid", "cc-num")}
            onBlur={e => transitionLabel("cc-num-hid", "cc-num-lab", "cc-num")}
            />
        </div>
        <div className="cc-input-con">
          <label className="cc-code-label" id="cc-code-lab" htmlFor="cc-code">
            Security Code*
          </label>
          <label className="cc-code-hidden" id="cc-code-hid" htmlFor="cc-code">
            Security Code*
          </label>
          <input
            type="text"
            id="cc-code"
            onFocus={e => transitionLabel("cc-code-lab", "cc-code-hid", "cc-code")}
            onBlur={e => transitionLabel("cc-code-hid", "cc-code-lab", "cc-code")}
          />
        </div>
        <div className="cc-year-month-con">
          <div className="cc-input-con">
            <label className="cc-month-label" id="cc-month-lab" htmlFor="cc-month">
              Exp. Month*
            </label>
            <label className="cc-month-hidden" id="cc-month-hid" htmlFor="cc-month">
              Exp. Month*
            </label>
            <select
              id="cc-month"
              onFocus={e => transitionLabel("cc-month-lab", "cc-month-hid", "cc-month")}
              onBlur={e => transitionLabel("cc-month-hid", "cc-month-lab", "cc-month")}
              >
              <option value=''></option>
              {displayMonths}
            </select>
          </div>
          <div className="cc-input-con">
            <label className="cc-year-label" id="cc-year-lab" htmlFor="cc-year">
              Exp. Year*
            </label>
            <label className="cc-year-hidden" id="cc-year-hid" htmlFor="cc-year">
              Exp. Year*
            </label>
            <select
              id="cc-year"
              onFocus={e => transitionLabel("cc-year-lab", "cc-year-hid", "cc-year")}
              onBlur={e => transitionLabel("cc-year-hid", "cc-year-lab", "cc-year")}
              >
              <option value=''></option>
              {displayYears}
            </select>
          </div>
        </div>
        <div className="same-as-shipping-con" id="same-as-shipping-con">
          <input
            type="checkbox"
            id="same-as-shipping"
            defaultChecked={true}
            onClick={e => shipCheckbox()}
          />
          <label htmlFor="same-as-shipping">Same as shipping</label>
          <div className="ship-component-con" id="ship-component-con">
            <ShippingAddress customer={props.address}/>
          </div>
          <div id="bill-not-same-as-ship-con">
            <ShippingAddressForm button={false}/>
          </div>
        </div>
        <button type="submit" className="cc-btn" onClick={e => props.handleCcSub(e, getCcData())}>Continue</button>
      </form>
    </section>
  )
}