import { tshirts } from '../data'
import config from '../config'
const convert = require('xml-js')

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
  getRates(pounds, ounces, destinationZip) {
    const userId = "407NA0006401"
    const originationZip = "91381"
    const proxy = "https://cors-anywhere.herokuapp.com/"
    const url = "https://secure.shippingapis.com/ShippingAPI.dll?API=RateV4&XML="
    const xml = `<RateV4Request USERID="${userId}"><Revision>2</Revision>\
      <Package ID="0"><Service>Online</Service>\
      <ZipOrigination>${originationZip}</ZipOrigination>\
      <ZipDestination>${destinationZip}</ZipDestination><Pounds>${pounds}</Pounds><Ounces>${ounces}</Ounces>\
      <Container></Container><Width></Width><Length></Length><Height></Height>\
      <Girth></Girth><Machinable>TRUE</Machinable></Package></RateV4Request>`

    return fetch(`${proxy}${url}${xml}`, {
      method: "GET",
      headers: {
        "Content-Type": "text/xml",
        // "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    })
    .then(res =>
      (!res.ok)
      ? res.text().then(text => convert.xml2js(text, {compact: true, spaces: 0})).then(e => Promise.reject(e))
      : res.text().then(text => convert.xml2js(text, {compact: true, spaces: 0}))
    )
  }
}

export default {
  ProdServices
}