import tshirt1 from './documents/t-shirt1.jpg'
import tshirt2 from './documents/t-shirt2.jpg'
import tshirt3 from './documents/t-shirt3.jpg'
import tshirt4 from './documents/t-shirt4.jpg'

const IMG_PATH = './documents/'
export const tshirts = [
  {
    id: 1,
    name: 't-shirt1',
    description: 'description for tshirt1',
    price: 25.00,
    src: tshirt1
  },
  {
    id: 2,
    name: 't-shirt2',
    description: 'description for tshirt2',
    price: 25.00,
    src: tshirt2

  },
  {
    id: 3,
    name: 't-shirt3',
    description: 'description for tshirt3',
    price: 25.00,
    src: tshirt3

  },
  {
    id: 4,
    name: 't-shirt4',
    description: 'description for tshirt4',
    price: 25.00,
    src: tshirt4
  }
]

const hours = [
  {
    date: 11/1/2020,
    hours: 10,
    research: 4,
    progress: 6
  }
]

export default {
  tshirts
}