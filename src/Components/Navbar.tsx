import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';


const Navbar = () => {
  return (
    <div className='navbar text-align-center'>
        <div className="logo">
            Logo eCommerce
        </div>
        <ul className='menu'>
            <li>
                <Link to={`https://simewhere`}>Something</Link>
            </li>
            <li>
                <Link to={`https://simewhere`}>Something</Link>
            </li>
            <li>
                <Link to={`https://simewhere`}>Something</Link>
            </li>
            <li>
                <Link to={`https://simewhere`}>Something</Link>
            </li>
            <li>
                <CartButton />
            </li>
        </ul>
    </div>
  )
}

export default Navbar