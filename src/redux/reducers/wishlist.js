import { TOGGLE_ITEM_IN_WISHLIST } from '../action-types'

const initialState = {
  wishlist: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ITEM_IN_WISHLIST: {
      return state
    }
    default: {
      return state
    }
  }
}
