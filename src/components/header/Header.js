import React from 'react'

export function Header() {
  const { cart, wishlist } = useSelector(
    ({ cart: { cart }, wishlist: { wishlist } }) => ({
      cart,
      wishlist,
    })
  )
  return (
    <header className="d-flex justify-between align-center ">
      <div>
        <h2> hello in shop</h2>
        <div className="d-flex justify-between ">
          <div className="mx-10">wishlist:{wishlist.length}</div>
          <div className="mx-10"> cartProd:{cart.length}</div>
        </div>
      </div>
    </header>
  )
}
