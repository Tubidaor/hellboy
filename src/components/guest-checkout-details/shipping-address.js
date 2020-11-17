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
  return (
    <form>
      <div className="first-name-con">
        <label htmlFor="first-name">First name</label>
        <input
          name="first-name"
          id="first-name"
          type="text"
          aria-label="Enter first name for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
        >
        </input>
      </div>
      <div className="last-name-con">
        <label htmlFor="last-name">Last name</label>
        <input
          name="last-name"
          id="last-name"
          type="text"
          aria-label="Enter last name for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
        >
        </input>
      </div>
      <div className="address-line1-con">
        <label htmlFor="address-line1">Address Line 1</label>
        <input
          name="address-line1"
          id="address-line1"
          type="text"
          aria-label="Enter address line one for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
        >
        </input>
      </div>
      <div className="address-line2-con">
        <label htmlFor="address-line2">Address Line 2</label>
        <input
          name="address-line2"
          id="address-line2"
          type="text"
          aria-label="Enter address line two for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
        >
        </input>
      </div>
      <div className="city-con">
        <label htmlFor="city">City</label>
        <input
          name="city"
          id="city"
          type="text"
          aria-label="Enter city for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
        >
        </input>
      </div>
      <div className="state-con">
        <label htmlFor="state">State</label>
        <select
          id="state"
          aria-label="Enter state for checkout"
          className="state"
        >
          {displayOptions}
        </select>
      </div>
      <div className="zip-con">
        <label htmlFor="zip">Zip Code</label>
        <input
          name="zip"
          id="zip"
          type="text"
          aria-label="Enter address line two for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
        >
        </input>
      </div>
      <div className="email-con">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="text"
          aria-label="Enter address line two for checkout"
          aria-required="true"
          aria-describedby="errorMessage"
        >
        </input>
      </div>
      <button
        onClick={e => props.handleAddressSubmission(e, returnFormInfo())}
      >
        Continue
      </button>
    </form>
  )
}