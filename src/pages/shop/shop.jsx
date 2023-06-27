import React from 'react';
import './shop.css';

import {PRODUCTS} from '../../products';
import Product from './product';


const Shop = () => {
  return (
    <div className='shop'>

        <div className='shopTitle'>
            <h1>Shop</h1>
        </div>

        <div className='products'>

          {PRODUCTS.map((product, index) => ( 
          <Product data={product} key={index} />
          
          ))}
        </div>

    </div>
  )
}

export default Shop;
