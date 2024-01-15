import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import SwiperInstance from './Components/SwiperInstance';
import CategoryItem from './Components/CategoryItem';
import { data } from './category';
import { data as products } from './products';
import ProductItem from './Components/ProductItem';

const Home = () => {
  return (
    <div className='container'>
        <Navbar />
        <div className="row">

        </div>
        Home
        <div className="row section">
          <div className="title">
            <h2>Categories</h2>
          </div>
          <div className="categories">
            {data.categories.map(category => (
              <CategoryItem key={category.id} id={category.id} name={category.name} image={category.image} subcategories={category.subcategories} />
            ))}
          </div>
        </div>

        <div className="row section">
          <div className="title">
            <h2>Products</h2>
          </div>
          <div className="categories">
            {products.products.map(product => (
              <ProductItem 
                key={product.id}
                product={product}
                  />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Home