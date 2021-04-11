import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import React from 'react'
import { useEffect } from 'react'
import { setProducts } from './redux'
import { Header } from './components/header'
import { ProductList } from './components/product-list'
import { Card } from './components/card'

function App() {
  const { products, cart, isCartOpen } = useSelector(
    ({ products: { products }, cart: { cart }, isCartOpen }) => ({
      products,
      cart,
      isCartOpen,
    })
  )

  const dispatch = useDispatch()

  console.log({ isCartOpen })

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
        {isCartOpen && <Card />}
      </div>
    </div>
  )
}

export default App
