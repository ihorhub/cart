import { TOGGLE_ITEM_IN_CART, ON_CART_VISIBILITY_TOGGLE } from '../action-types'
const initialState = {
  cart: [],
  isCartOpen: false,
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ITEM_IN_CART: {
      const updatedCart = state.cart.filter((el) => el.id !== action.payload.id)
      if (updatedCart.length === state.cart.length) {
        updatedCart.push(action.payload)
      }
      return { ...state, cart: updatedCart }
    }
    case ON_CART_VISIBILITY_TOGGLE: {
      console.log(state.isCartOpen)
      return { ...state, isCartOpen: !state.isCartOpen }
    }

    default: {
      return state
    }
  }
}
