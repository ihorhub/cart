import React from 'react'

export function Header() {
  return (
    <header className="d-flex justify-between align-center ">
      <div>
        <h2> hello in shop</h2>
        <div className="d-flex justify-between ">
          <div className="mx-10">wishlist:</div>
          <div className="mx-10  "> cartProd:</div>
        </div>
      </div>
    </header>
  )
}
