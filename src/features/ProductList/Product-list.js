import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementAsync,
  increment,
  selectCount

} from './ProductListSlice';
import styles from './Counter.module.css';

export default function ProductList() {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
 

 

  return (
    <div>
      <div >

      </div>
    </div>
  );
}
