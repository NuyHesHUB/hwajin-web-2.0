import React from 'react';
import { Link } from 'react-router-dom';
import '../../styled/header.css';

import Logo from '../../image/logo.png';

const Header = () => {
    return (
        <div className='header-wrap'>
            <div className='header'>
                <div className='menu'>
                    <div className='left-wrap'>
                        <div style={{height:'100%'}}>
                            <Link to="/"><img src={Logo} alt="logo" style={{width:'150px',marginTop:'10px'}}/></Link>
                        </div>
                    </div>
                    <div className='flex-wrap'>
                        <div className='center-wrap'>
                            <nav style={{width:'100%',display:'inline-block',height:'80px',lineHeight:'80px'}}>
                                <ul>
                                    <li><Link to="/">회사소개</Link></li>
                                    <li><Link to="/about">서비스</Link></li>
                                    <li><Link to="/contact">제휴문의</Link></li>
                                    <li><Link to="/contact">공지사항</Link></li>
                                    <li><Link to="/contact">고객센터</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='right-wrap'>
                            <div className='shape'>
                                <p>무료 견적</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;