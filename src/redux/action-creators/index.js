import {
  SET_PRODUCTS,
  TOGGLE_ITEM_IN_CART,
  TOGGLE_ITEM_IN_WISHLIST,
  ON_CART_VISIBILITY_TOGGLE,
} from '../action-types'
import { services } from '../../services'

// export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload })

// with thunk

const { productService } = services
export const setProducts = () => async (dispatch) => {
  const response = await productService.getProducts()
  const json = await response.json()
  dispatch({ type: SET_PRODUCTS, payload: json })
}
export const toggleItemInWishList = (product) => ({
  type: TOGGLE_ITEM_IN_WISHLIST,
  payload: product,
})
export const toggleItemInCart = (product) => ({
  type: TOGGLE_ITEM_IN_CART,
  payload: product,
})
export const onCartVisibilityToggle = () => ({
  type: ON_CART_VISIBILITY_TOGGLE,
})
