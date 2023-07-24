import React from 'react';
import "../../styled/Footer.css";
import Logo from "../../assets/image/footer-logo.png";

const Footer = () => {
    return (
        <div className='footer-wrap'>
            <div className='footer'>
                <div className='logo-wrap'>
                    <img style={{width:'240px'}} src={Logo} alt="footer-logo"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;