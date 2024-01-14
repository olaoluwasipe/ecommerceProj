import React, {useState} from 'react';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

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
    const { cart, addToCart, isInCart } = useCart();
    const [inCart, setinCart] = useState(isInCart(product.id));

    const handleAddToCart = (productId: number, productName: string, productImage: string, productQuantity: number, productPrice: number) => {
        addToCart( {
            id: productId,
            name: productName,
            image: productImage,
            quantity: productQuantity,
            price: productPrice
        })
        setinCart(isInCart(productId))
        console.log(cart.findIndex((cartItem) => cartItem.id === product.id) )
    }
    return (
        <div className='productItem'>
            <Link to={product.slug} className="imgContainer">
                <img src={product.images[0]} alt="" />
                <img src={product.images.length > 1 ? product.images[1] : product.images[0]} alt="" />
            </Link>
            <Link to={product.slug}><h3>{product.name}</h3></Link>
            <div className="bottomArea">
                <div className="buttons">
                    <button 
                    onClick={() => handleAddToCart(product.id, product.name, product.images[0], 1, product.discount_price ? product.discount_price : product.price)}
                    className='addToCart'>{inCart ? 'Added' : 'Add'} to Cart</button>
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