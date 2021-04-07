import { TOGGLE_ITEM_IN_WISHLIST } from '../action-types'

const initialState = {
  wishlist: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ITEM_IN_WISHLIST: {
      const updateWishlist = state.wishlist.filter(
        (el) => el.id !== action.payload.id
      )
      if (updateWishlist.length === state.wishlist.length) {
        updateWishlist.push(action.payload)
      }
      return { ...state, wishlist: updateWishlist }
    }
    default: {
      return state
    }
  }
}
