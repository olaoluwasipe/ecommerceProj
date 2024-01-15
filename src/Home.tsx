import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import SwiperInstance from './Components/SwiperInstance';
import CategoryItem from './Components/CategoryItem';
import { data } from './category';
import { data as products } from './products';
import ProductItem from './Components/ProductItem';

const Home = () => {
  const [realProducts, setRealProducts] = useState(products);

  const prod = async () => {
    try {
      const produ = await axios.post('http://127.0.0.1:8000/products');
      setRealProducts(produ);
      console.log(products);
      console.log(produ)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const pro = async () => {
      const pos = await prod();
    }

    pro()
  }, [])
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
            {realProducts.data.map(product => (
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