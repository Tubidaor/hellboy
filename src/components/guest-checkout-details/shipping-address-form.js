import { MiscServices } from '../../services/misc-services'
import './guest-checkout-details.css'

export default function ShippingAddressForm(props) {

  const states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ]
  
  const displayOptions = states.map(state => <option value={state}>{state}</option>)
  
  function returnFormInfo() {

    const first_name = document.getElementById('first-name')
    const last_name = document.getElementById('last-name')
    const address_line1 = document.getElementById('address-line1')
    const address_line2 = document.getElementById('address-line2')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const zip = document.getElementById('zip')
    const email = document.getElementById('email')


    const name = {
      first_name: first_name.value,
      last_name: last_name.value
    }
    const address = {
      address_line1: address_line1.value,
      address_line2: address_line2.value,
      city: city.value,
      state: state.value,
      zip: zip.value
    }

    const shippingInfo = {
      name: name,
      address: address,
      email: email
    }
    return shippingInfo
  }

  const transLabel = MiscServices.transitionLabel
  return (
    <form className="ship-address-form">
      <div className="first-name-con">
        <label htmlFor="first-name" id="first-name-lab">First name</label>
        <label htmlFor="first-name" id="first-name-hid">First name</label>
        <input
          name="first-name"
          id="first-name"
          type="text"
          aria-label="Enter first name for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
          onFocus={e => transLabel("first-name-lab", "first-name-hid", "first-name")}
          onBlur={e => transLabel("first-name-hid", "first-name-lab", "first-name")}
        />
      </div>
      <div className="last-name-con">
        <label htmlFor="last-name" id="last-name-lab">Last name</label>
        <label htmlFor="last-name" id="last-name-hid">Last name</label>
        <input
          name="last-name"
          id="last-name"
          type="text"
          aria-label="Enter last name for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
          onFocus={e => transLabel("last-name-lab", "last-name-hid", "last-name")}
          onBlur={e => transLabel("last-name-hid", "last-name-lab", "last-name")}
        />
      </div>
      <div className="address-line1-con">
        <label htmlFor="address-line1" id="address-line1-lab">Address Line 1</label>
        <label htmlFor="address-line1" id="address-line1-hid">Address Line 1</label>
        <input
          name="address-line1"
          id="address-line1"
          type="text"
          aria-label="Enter address line one for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
          onFocus={e => transLabel("address-line1-lab", "address-line1-hid", "address-line1")}
          onBlur={e => transLabel("address-line1-hid", "address-line1-lab", "address-line1")}
        />
      </div>
      <div className="address-line2-con">
        <label htmlFor="address-line2" id="address-line2-lab">Address Line 2</label>
        <label htmlFor="address-line2" id="address-line2-hid">Address Line 2</label>

        <input
          name="address-line2"
          id="address-line2"
          type="text"
          aria-label="Enter address line two for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
          onFocus={e => transLabel("address-line2-lab", "address-line2-hid", "address-line2")}
          onBlur={e => transLabel("address-line2-hid", "address-line2-lab", "address-line2")}
        />
      </div>
      <div className="city-con">
        <label htmlFor="city" id="city-lab">City</label>
        <label htmlFor="city" id="city-hid">City</label>
        <input
          name="city"
          id="city"
          type="text"
          aria-label="Enter city for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
          onFocus={e => transLabel("city-lab", "city-hid", "city")}
          onBlur={e => transLabel("city-hid", "city-lab", "city")}
        />
      </div>
      <div className="state-con">
        <label htmlFor="state" id="state-lab">State</label>
        <label htmlFor="state" id="state-hid">State</label>

        <select
          id="state"
          aria-label="Enter state for checkout"
          className="state"
          onFocus={e => transLabel("state-lab", "state-hid", "state")}
          onBlur={e => transLabel("state-hid", "state-lab", "state")}
        >
          <option value=""></option>
          {displayOptions}
        </select>
      </div>
      <div className="zip-con">
        <label htmlFor="zip" id="zip-lab">Zip Code</label>
        <label htmlFor="zip" id="zip-hid">Zip Code</label>
        <input
          name="zip"
          id="zip"
          type="text"
          aria-label="Enter address line two for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
          onFocus={e => transLabel("zip-lab", "zip-hid", "zip")}
          onBlur={e => transLabel("zip-hid", "zip-lab", "zip")}
        />
      </div>
      <div className="email-con">
        <label htmlFor="email" id="email-lab">Email</label>
        <label htmlFor="email" id="email-hid">Email</label>
        <input
          name="email"
          id="email"
          type="text"
          aria-label="Enter address line two for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
          onFocus={e => transLabel("email-lab", "email-hid", "email")}
          onBlur={e => transLabel("email-hid", "email-lab", "email")}
        />
      </div>
      {
        props.button == true &&
        <button
          onClick={e => props.handleAddressSubmission(e, returnFormInfo())}
        >
          Continue
        </button>
      }
    </form>
  )
}