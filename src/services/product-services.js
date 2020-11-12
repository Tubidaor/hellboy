import { tshirts } from '../data'
import config from '../config'

export const ProdServices = {
  getProduct(productId) {
    const product = findProduct(tshirts, productId)

    function findProduct(products, productId) {
      return products.filter(product => product.id == productId)[0]
    }
    return product
  },
  createCart() {
    window.sessionStorage.setItem(config.CART, JSON.stringify({items: []}))
  },
  saveCart(cart) {
    window.sessionStorage.setItem(config.CART, JSON.stringify({items: cart}))
  },
  addToCart(newProduct) {
    'adding to cart'
    console.log(ProdServices.getCartFromSessionStorage()?true:false)
    if(!ProdServices.getCartFromSessionStorage()) {
      ProdServices.createCart()
    }
    const cart = ProdServices.getCartFromSessionStorage()
    const updatedCart =  [
        ...cart.items,
        newProduct
      ]
    
    window.sessionStorage.setItem(config.CART, JSON.stringify({items: updatedCart}))
    console.log(ProdServices.getCartFromSessionStorage())
  },
  getCartFromSessionStorage() {
    return JSON.parse(window.sessionStorage.getItem(config.CART))
  },
  emptyCart() {
    window.sessionStorage.clear(config.CART)
  },
  addToQuantity() {
    // const currentQuantity
  }
}

export const ShippingServices = {
  getRates() {
    const userId = "407NA0006401"
    const url = "https://secure.shippingapis.com/ShippingAPI.dll?API=RateV4&XML="
    const xml = `<RateV4Request USERID="${userId}"><Revision>2</Revision>\
      <Package ID="0"><Service>PRIORITY</Service>\
      <ZipOrigination>22201</ZipOrigination>\
      <ZipDestination>26301</ZipDestination><Pounds>8</Pounds><Ounces>2</Ounces>\
      <Container></Container><Width></Width><Length></Length><Height></Height>\
      <Girth></Girth><Machinable>TRUE</Machinable></Package>`

    return fetch(url+xml, {
      method: "GET",
      headers: {
        "content-type": "text/xml",
        "Origin": "lvh.me",
        "Allow-Access-Control-Origin": "*"
      }
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  }
}

export default {
  ProdServices
}