import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { data } from '../products';
import { Link } from 'react-router-dom';

interface ProductPercs {
    id: number;
    images: Array<string>;
    name: string;
    description: string;
    price: number;
    discount_price: number | null;
    long_description: string;
    slug: string;
    sku: string;
    stock: number;
    brand: string;
    rating: number;
    category: number;
    featured: boolean;
}

interface ProductItemProps {
    product: ProductPercs
}


const ProductItem: React.FC<ProductItemProps> = ( {product} ) => {
  return (
    <div className='productItem'>
        <Link to={product.slug} className="imgContainer">
            <img src={product.images[0]} alt="" />
            <img src={product.images.length > 1 ? product.images[1] : product.images[0]} alt="" />
        </Link>
        <Link to={product.slug}><h3>{product.name}</h3></Link>
        <div className="bottomArea">
            <div className="buttons">
                <button className='addToCart'>Add to Cart</button>
                <button><FiHeart /></button>
            </div>
            <div className="price">
                <p className={product.discount_price ? 'slashed' : ''}>{product.price}</p>
                {product.discount_price ? (
                    <p className='discount'>{product.discount_price}</p>
                ) : ''}
            </div>
        </div>
    </div>
  )
}

export default ProductItem