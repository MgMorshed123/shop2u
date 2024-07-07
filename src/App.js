import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
// import ProductList from './features/ProductList/Product-list';
import Home from './app/Pages/Home/Home';
import LoginPage from '../src/app/Pages/Login/LoginPage'
import SignUpPage from '../src/app/Pages/SignUp/SignUpPage'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from './features/Auth/SignUp';
import { Cart } from './features/Cart/Cart';
import ProductDetailsPage from './features/Product/ProductDetailsPage';


const router = createBrowserRouter([

  {
    path : '/',
    element : <Home></Home>
  },

  {
    path : '/login',
    element : <LoginPage></LoginPage>
  },

  {
    path : '/sign',
    element : <SignUpPage></SignUpPage>
  },

  {
    path : '/cart',
    element : <Cart></Cart>
  },

  {
    path : '/product-detail',
    element : <ProductDetailsPage></ProductDetailsPage>
  }
])



function App() {
  return (
    <div className="App">

     <RouterProvider router={router}></RouterProvider> 
     
    </div>
  );
}

export default App;
