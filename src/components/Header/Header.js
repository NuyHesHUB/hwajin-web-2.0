import React from 'react';
import { Link } from 'react-router-dom';
import '../../styled/header.css'

const Header = () => {
    return (
        <div className='header-wrap'>
            <div className='header'>
                <div className='top-menu'>
                    <div className='left-wrap'></div>
                    <div className='center-wrap'>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='right-wrap'></div>
                </div>
                <div className='bottom-menu'></div>
            </div>
        </div>
    );
};

export default Header;