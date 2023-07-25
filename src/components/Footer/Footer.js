import React from 'react';
import { Link } from 'react-router-dom';
import "../../styled/Footer.css";
import Logo from "../../assets/image/footer-logo.png";

const Footer = () => {
    return (
        <div className='footer-wrap'>
            <div className='footer'>
                <div className='top-footer-wrap'>
                    <div className='logo-wrap'>
                        <img style={{width:'320px'}} src={Logo} alt="footer-logo"/>
                    </div>
                    <div className='menu-wrap'>
                        <div className='footer-contents'>
                            <Link to="/about">기업 소개</Link>
                        </div>
                        <div className='footer-contents'>
                            <Link to="/service">서비스 소개</Link>
                        </div>
                        <div className='footer-contents'>
                            <Link to="/partnership">제휴 문의</Link>
                        </div>
                    </div>
                </div>
                <div className='bottom-footer-wrap'>
                    <p>(주)화진로보틱스 | 대표이사 강화진</p>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div>
                            <span>경기도 화성시 동탄첨단산업1로 51-9, 동탄엠타워 1619호 | </span>
                            <span>사업자등록번호: 123-45-678910</span>
                        </div>
                        <div>
                            <span>© Hwajin Robotics, Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;