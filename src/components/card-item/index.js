import React from 'react'
import { useDispatch } from 'react-redux'

import { onCartVisibilityToggle } from '../../redux/action-creators'

import './index.css'

export const CardItem = ({ cart }) => {
  let sum = cart.map((el) => el.price).reduce((a, b) => a + b, 0)

  const dispatch = useDispatch()
  return (
    <div className="modal-backdrop">
      <div className="modal-body">
        {cart.map((cart) => (
          <ul>
            <li>id:{cart.id}</li>
            <li> Title:{cart.title}</li>
            <li> Price:{cart.price}</li>
          </ul>
        ))}
        <strong>total:{sum}</strong>
        <button
          className="mar red"
          onClick={() => dispatch(onCartVisibilityToggle())}
        >
          close
        </button>
      </div>
    </div>
  )
}
