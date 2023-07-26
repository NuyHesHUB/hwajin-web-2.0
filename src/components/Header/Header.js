import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../../styled/header.css';

import Logo from '../../assets/image/robotos-logo.png';

const Header = () => {
 /*  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true); */
/*   const [activeMenu, setActiveMenu] = useState('about');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  }; */

  /* const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]); */

  return (
    <div className="header-wrap">
      <div className='container'>
        <div className='header-box'>
          <div className='header-left'>
            <div>
              <Link to="home" smooth={true} duration={500}>
                <img src={Logo} alt="logo" style={{ width: '180px', marginTop: '22px' }} />
              </Link>
            </div>
          </div>
          <div className='header-flex-wrap'>
            <div className='center-wrap'>
              <nav style={{ width: '100%', display: 'inline-block', height: '80px', lineHeight: '80px' }}>
                <ul className='menu-wrap'>
                  <li>
                    <div>
                        <Link style={{cursor:'pointer'}} to="about" smooth={true} duration={500}>회사소개</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Link style={{cursor:'pointer'}} to="service" smooth={true} duration={500}>서비스</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href='#Partnership'>제휴 문의</a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
