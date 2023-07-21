import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../styled/header.css';

import Logo from '../../image/logo.png';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prevScrollPos]);
    
    return (
        <div className={`header-wrap ${visible ? '' : 'hidden'}`}>
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