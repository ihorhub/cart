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
        <h2 className="align-center mx-10"> hello in shop</h2>

        <div className="mx-10 align-center" title="wishlist">
          wishlist:{wishlist.length}
        </div>
        <button
          className="color"
          onClick={() => dispatch(onCartVisibilityToggle())}
          title="Click"
        >
          cartProd:{cart.length}
        </button>
      </div>
    </header>
  )
}
