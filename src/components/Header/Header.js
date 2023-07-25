import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styled/header.css';

import Logo from '../../assets/image/robotos-logo.png';

const Header = () => {
    /*-------------------------------------*\
               Header Scroll Event
    \*-------------------------------------*/
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [activeMenu, setActiveMenu] = useState('about');
    
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
      };

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
            Header 경로에 따라 밑줄 리셋
    \*-------------------------------------*/
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        // 현재 경로에 따라 activeMenu 업데이트
        if (currentPath === '/about') {
        setActiveMenu('about');
        } else if (currentPath === '/service') {
        setActiveMenu('service');
        } else if (currentPath === '/partnership') {
        setActiveMenu('partnership');
        } else {
        setActiveMenu('');
        }
    }, [currentPath]);

    /*-------------------------------------*\
            Header 2Depth Menu Event
    \*-------------------------------------*/
    /* const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuEnter = () => {
        setMenuOpen(true);
    };

    const handleMenuLeave = () => {
        setMenuOpen(false);
    }; */
    const handleMenuToggle = () => {
        const menuWrap = document.querySelector('.mobile-menu-wrap');
        menuWrap.classList.toggle('open');
    };
    const handleMenuBtn = () => {
        const menuWrap = document.querySelector('.menu-icon');
        const subMenu = menuWrap.querySelector('.line'); // 자식 요소 중 .sub-menu 클래스를 가진 요소 선택
        subMenu.classList.add('open'); // 선택한 요소에 open 클래스 추가
    };

    return (
        <div className={`header-wrap ${visible ? '' : 'hidden'}`}>
            <div className='container'>
                <div className='header-box'>
                    <div className='header-left'>
                        <div>
                            <Link to="/">
                                <img src={Logo} alt="logo" style={{width:'180px',marginTop:'22px'}}/>
                            </Link>
                        </div>
                    </div>
                    <div className='header-flex-wrap'>
                        <div className='center-wrap'>
                            <nav style={{ width: '100%', display: 'inline-block', height: '80px', lineHeight: '80px' }}>
                                <div className="menu-icon" onClick={handleMenuToggle}>
                                    <div className="line" onClick={handleMenuBtn}></div>
                                    <div className="line" onClick={handleMenuBtn}></div>
                                    <div className="line" onClick={handleMenuBtn}></div>
                                </div>
                                <ul className='mobile-menu-wrap open'>
                                    <li><Link to="/about">회사소개</Link></li>
                                    <li><Link to="/service">서비스</Link></li>
                                    <li><Link to="/about">제휴 문의</Link></li>
                                </ul>
                                <ul className='menu-wrap'>
                                    <li>
                                        <div className={`menu-item ${activeMenu === 'about' ? 'active' : ''}`} onClick={() => handleMenuClick('about')}>
                                            <Link to="/about">회사소개</Link>
                                            {/* <ul>
                                                <li>
                                                    <Link to="/about">개요</Link>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </li>
                                    <li>
                                        {/* <div onMouseEnter={handleMenuEnter}onMouseLeave={handleMenuLeave}> */}
                                        <div className={`menu-item ${activeMenu === 'service' ? 'active' : ''}`} onClick={() => handleMenuClick('service')}>
                                            <Link to="/service">서비스</Link>
                                            {/* <ul className={`sub-menu-wrap ${menuOpen ? 'open' : ''}`}> */}
                                            {/* <ul className="sub-menu-wrap">
                                                <div className="sub-menu">
                                                    <li>
                                                        <Link to="/service1">로봇</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service2">전기오토바이</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service3">아웃소싱</Link>
                                                    </li>
                                                </div>
                                            </ul> */}
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`menu-item ${activeMenu === 'partnership' ? 'active' : ''}`} onClick={() => handleMenuClick('partnership')}>
                                            {/* <Link target="_blank" to="https://docs.google.com/forms/d/e/1FAIpQLSf6dlrvjzw4o7h7MUMh44l1UxDTeYaFZDaXBvQ41CsG1MVi2A/viewform?usp=pp_url">제휴 문의</Link> */}
                                            <Link to="/partnership">제휴 문의</Link>
                                            {/* <ul>
                                                <li>
                                                    <Link to="/partnership">문의하기</Link>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* <div className='right-wrap'>
                            <div className='shape'>
                                <p>무료 견적</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;