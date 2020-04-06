import React from 'react';
import '../styles/Cart-Dropdown.scss';
import CustomButton from './CustomButton.component';

const CartDropdown = () => (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
    </div>
);

export default CartDropdown;