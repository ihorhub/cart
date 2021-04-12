import React from 'react'
import { useDispatch } from 'react-redux'

import { onCartVisibilityToggle } from '../../redux/action-creators'

import './index.css'

export const CardItem = ({ cart }) => {
  let sum = cart.map((el) => el.price).reduce((a, b) => a + b, 0)

  let button = document.querySelector('button')

  let checkmark = document.querySelector('svg')
  let className = 'animate'

  button.addEventListener('click', function () {
    if (!checkmark.classList.contains(className)) {
      checkmark.classList.add(className)

      setTimeout(function () {
        checkmark.classList.remove(className)
      }, 1700)
    }
  })

  const dispatch = useDispatch()
  return (
    <div className="modal-backdrop">
      <div className="modal-body">
        {cart.map((cart) => (
          <ul>
            <li>id:{cart.id}</li>
            <li> Title:{cart.title}</li>
            <li> Price:{cart.price}</li>
            <hr />
          </ul>
        ))}
        <strong>total:{sum}</strong>
        <div class="container">
          <svg viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 18 32.34 l -8.34 -8.34 -2.83 2.83 11.17 11.17 24 -24 -2.83 -2.83 z"
              stroke="#3da35a"
              fill="transparent"
            />
          </svg>
        </div>

        <button onClick={() => dispatch(onCartVisibilityToggle())}>
          Buy this product
        </button>
      </div>
    </div>
  )
}
