import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiTrash } from "react-icons/fi";
import { useCart } from '../Context/CartContext';

const CartButton = () => {
  const { cart, getTotalItems, removeFromCart } = useCart();
  const [showCartItems, setShowCartItems] = useState('')

  const handleShowCartItems = () => {
    showCartItems == '' ? setShowCartItems('show') : setShowCartItems('');
  }

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id)
  }

  return (
    <div className='cartButton'>
        <div onClick={() => handleShowCartItems()} className='theCart'>
            <div className='items'>{getTotalItems()}</div>
            <FiShoppingCart />
        </div>
        <div className={`cartItems ${showCartItems}`}>
          {cart.length < 1 ? 'There are no items in the cart' : ''}
          {cart.map((item) => (
            <div className="cartItem">
              <img src={item.image} alt="" />
              <div className="info">
                <h4>{item.name}</h4>
                <div className="bottom">
                  <p>x {item.quantity}</p>
                  <p>{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)} className="deleteBtn">
                  <FiTrash /> Remove
                </button>
              </div>
            </div>
          ))} 
        </div>
    </div>
  )
}

export default CartButton