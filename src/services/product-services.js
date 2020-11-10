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
  addToCart(newProduct) {
    'adding to cart'
    console.log(ProdServices.getCartFromSessionStorage()?true:false)
    if(!ProdServices.getCartFromSessionStorage) {
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
  }
}

export default {
  ProdServices
}