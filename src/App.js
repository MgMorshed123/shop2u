import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/ProductList/Product-list';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
       <ProductList></ProductList>
    </div>
  );
}

export default App;
