import { SET_PRODUCTS } from '../action-types'

const initialState = {
  products: [],
}

const products = (state = initialState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, products: action.payload }
    }
    default: {
      return state
    }
  }
}
export default products
