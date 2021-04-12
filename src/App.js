import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import React from 'react'
import { useEffect } from 'react'
import { setProducts } from './redux'
import { Header } from './components/header'
import { ProductList } from './components/product-list'
import { CardItem } from './components/card-item'

function App() {
  const { products } = useSelector(({ products: { products } }) => ({
    products,
  }))
  const cart = useSelector(({ cart: { cart } }) => cart)
  const { isCartOpen } = useSelector((state) => ({
    ...state.cart,
  }))
  console.log(isCartOpen)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProducts())
  }, [dispatch])
  return (
    <div className="App">
      <div className="shop">
        <Header />
      </div>
      <div>
        <ProductList products={products} />
      </div>
      {isCartOpen && <CardItem cart={cart} />}
    </div>
  )
}

export default App
