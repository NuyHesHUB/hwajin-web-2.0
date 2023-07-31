import React from 'react';
import { Link } from 'react-scroll';
import "../../styled/Footer.css";
import Logo from "../../assets/image/footer-logo.png";

const Footer = () => {
    return (
        <div className='footer-wrap'>
            <div className='footer'>
                <div className='top-footer-wrap'>
                    <div className='logo-wrap'>
                        <img src={Logo} alt="footer-logo"/>
                    </div>
                    <div className='menu-wrap'>
                        <div className='footer-contents'>
                            <Link to="about" smooth={true} duration={500}>기업 소개</Link>
                        </div>
                        <div className='footer-contents'>
                            <Link to="service" smooth={true} duration={500}>서비스 소개</Link>
                        </div>
                        <div className='footer-contents'>
                            <Link to="" smooth={true} duration={500}>제휴 문의</Link>
                        </div>
                    </div>
                </div>
                <div className='bottom-footer-wrap'>
                    <p>(주)화진로보틱스 | 대표이사 강화진</p>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div>
                            <span>경기도 화성시 동탄첨단산업1로 51-9, 동탄엠타워 1619호 | </span>
                            <span>사업자등록번호: 323-87-01693</span>
                        </div>
                        <div className='mobile-none'>
                            <span>© Hwajinrobotics, Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;