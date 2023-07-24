import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../styled/header.css';

import Logo from '../../assets/image/logo.png';

const Header = () => {
    /*-------------------------------------*\
               Header Scroll Event
    \*-------------------------------------*/
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
    /*-------------------------------------*\
               Header Scroll Event
    \*-------------------------------------*/
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleSubMenuToggle = (menu) => {
      setActiveSubMenu(menu);
    };

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
                            <nav style={{ width: '100%', display: 'inline-block', height: '80px', lineHeight: '80px' }}>
                                <ul>
                                    <li>
                                        <div
                                            onMouseEnter={() => handleSubMenuToggle('company')}
                                            onMouseLeave={() => handleSubMenuToggle(null)}
                                        >
                                        <Link to="/about">회사소개</Link>
                                        <ul className={`submenu ${activeSubMenu === 'company' ? 'active' : ''}`}>
                                            <li>
                                            <Link to="/about">개요</Link>
                                            </li>
                                            {/* Add more submenu items for the 회사소개 menu if needed */}
                                        </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            onMouseEnter={() => handleSubMenuToggle('service')}
                                            onMouseLeave={() => handleSubMenuToggle(null)}
                                        >
                                        <Link to="/service">서비스</Link>
                                        {/* 서비스 서브메뉴 */}
                                        <ul className={`submenu ${activeSubMenu === 'service' ? 'active' : ''}`}>
                                            <div>
                                                <li style={{background:'red',height:'100px'}}>
                                                    <Link to="/service1">로봇</Link>
                                                </li>
                                                <li style={{background:'red',height:'100px'}}>
                                                    <Link to="/service2">전기오토바이</Link>
                                                </li>
                                                <li style={{background:'red',height:'100px'}}>
                                                    <Link to="/service3">아웃소싱</Link>
                                                </li>
                                            </div>
                                        </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            onMouseEnter={() => handleSubMenuToggle('partnership')}
                                            onMouseLeave={() => handleSubMenuToggle(null)}
                                        >
                                        <Link to="/partnership">제휴 문의</Link>
                                            <ul className={`submenu ${activeSubMenu === 'partnership' ? 'active' : ''}`}>
                                                <li>
                                                <Link to="/partnership">문의하기</Link>
                                                </li>
                                                {/* Add more submenu items for the 회사소개 menu if needed */}
                                            </ul>
                                        </div>
                                    </li>
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