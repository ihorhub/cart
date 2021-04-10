import './App.css'
import { useSelector } from 'react-redux'
import React from 'react'
import { Header } from './components/header'
import { ProductItem } from './components/product-item'
import { ProductList } from './components/product-list'
import { useEffect, useDispatch } from 'react'
import { useServices } from './services'
import { setProducts } from './redux'
import { Card } from './components/card'

function App() {
  const { cart, products, wishlist, isCartOpen } = useSelector(
    ({
      cart: { cart },
      wishlist: { wishlist },
      products: { products },
      isCartOpen: { isCartOpen },
    }) => ({
      cart,
      wishlist,
      products,
      isCartOpen,
    })
  )
  console.log(store)
  const dispatch = useDispatch()

  // const { productService } = useServices()
  // const fetchData = useCallback(async () => {
  //   const response = await productService.getProducts()
  //   const json = await response.json()
  //   dispatch(setProducts(json))
  //   console.log(json)
  // }, [])

  useEffect(() => {
    dispatch(setProducts())
    // fetchData()
  }, [])
  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
      {isCartOpen && <Card />}
      {/* <h1>
        HELLO Code {cart.length} {wishlist.length}
        {products.length}
      </h1> */}
    </div>
  )
}

export default App
