import React from 'react'
import './index'

export const ProductItem = ({
  isAddedTOWishlist,
  isAddedTOCart,
  onAddToCart,
  onAddToWishlist,
  product,
  product: { id, title, price, description },
}) => {
  return (
    <div className="cart-item">
      <ul>
        <li>{id}</li>
        <li>Title:{title}</li>
        <li>Price:{price}</li>
        <li>Description:{description}</li>
      </ul>

      <button
        style={{ background: isAddedTOCart ? 'yellow' : 'green' }}
        onClick={() => onAddToCart(product)}
      >
        {isAddedTOCart ? 'remove from cart' : 'add item to cart'}
      </button>

      <button
        style={{ background: isAddedTOWishlist ? 'red' : 'green' }}
        onClick={() => onAddToWishlist(product)}
      >
        {isAddedTOWishlist ? 'remove from wishlist' : 'add to wishlist'}{' '}
      </button>
      <hr />
    </div>
  )
}
