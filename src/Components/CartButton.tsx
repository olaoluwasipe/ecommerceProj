import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const CartButton = () => {
    const [itemsInCart, setItemsInCart] = useState(0);

  return (
    <div className='cartButton'>
        <Link to={`https;`}>
            <div className='items'>{itemsInCart}</div>
            <FiShoppingCart />
        </Link>
    </div>
  )
}

export default CartButton