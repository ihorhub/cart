import React from 'react'
import { ProductItem } from '../product-item'
import { useDispatch, useSelector } from 'react-redux'
import { toggleItemInWishList, toggleItemInCart } from '../../redux'

export const ProductList = ({ products }) => {
  const dispatch = useDispatch()
  const onAddToWishlist = (product) => {
    dispatch(toggleItemInWishList(product))
  }
  const onAddToCart = (product) => {
    dispatch(toggleItemInCart(product))
  }

  return (
    <div>
      {products.map((product) => (
        <ProductItem
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
          product={product}
          key={product._id}
        />
      ))}
    </div>
  )
}
