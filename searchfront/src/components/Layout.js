import React from 'react'
import { Link ,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <Link to="/">ProductForm</Link>

      <br/>

      <br/>

      <br/>
      <Link to="/list">ProductList</Link>
<br/>
<br/>
<br/>
      <Outlet/>
    </div>
  )
}

export default Layout
