import React from 'react'

import ProductList from '../../../features/ProductList/Product-list'
import Navbar from '../../../Components/Navbar/Navbar'

const Home = () => {
  return (

    <div>

         <Navbar>
            <ProductList></ProductList>
         </Navbar>

    

    </div>
  )
}

export default Home