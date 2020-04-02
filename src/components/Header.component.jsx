import React from 'react';

import '../styles/Header.scss';

import {ReactComponent as Logo} from '../assests/logo.svg';

import {Link} from 'react-router-dom';

const Header = () => (
    <div className='header'>
    <Link className='logo-container' to='/'>
    <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>SHOP</Link>
    <Link className='option' to='/shop'>CONTACT</Link>
    </div>
    </div>
);

export default Header;