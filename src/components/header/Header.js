import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onCartVisibilityToggle } from '../../redux/action-creators'
import './index'

export const Header = () => {
  const { cart, wishlist } = useSelector(
    ({ cart: { cart }, wishlist: { wishlist } }) => ({
      cart,
      wishlist,
    })
  )
  const dispatch = useDispatch()
  return (
    <header>
      <div>
        <h2> hello in shop</h2>
        <header>
          <div>wishlist:{wishlist.length}</div>
          <button onClick={() => dispatch(onCartVisibilityToggle())}>
            cartProd:{cart.length}
          </button>
        </header>
      </div>
    </header>
  )
}
