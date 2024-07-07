import React from 'react'

// import ProductList from '../../../features/ProductList/Product-list'
import Navbar from '../../../Components/Navbar/Navbar'
import ProductList from '../../../features/Product/Product-list'

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