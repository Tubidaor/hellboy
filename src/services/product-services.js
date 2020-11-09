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
  addToCart(product) {
    window.sessionStorage.setItem(config.CART, product)
  }
}

export default {
  ProdServices
}