import { combineReducers } from 'redux'
import cart from './cartProd'
import products from './products'
import wishlist from './wishlist'
export const reducer = combineReducers({
  cart,
  wishlist,
  products,
})
