import React from 'react'
import { useSelector } from 'react-redux'
import './index'

export const Card = () => {
  const cart = useSelector(({ cart }) => cart)
  return (
    <div className="modal-backdrop">
      <div className="modal-body"></div>
    </div>
  )
}
