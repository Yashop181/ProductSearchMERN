import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
const App = () => {
  return (
    <>
        <Routes>
          <Route  path='/'  element={<Layout/>}>
            <Route index element={<ProductForm/>} />
            <Route path='/list' element={<ProductList/>} />

          </Route>
        </Routes>
      
    </>
  )
}

export default App
