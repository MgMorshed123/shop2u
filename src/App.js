import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/ProductList/Product-list';

function App() {
  return (
    <div className="App">
     
       <ProductList></ProductList>
    </div>
  );
}

export default App;
