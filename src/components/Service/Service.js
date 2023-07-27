import React from 'react';
import '../../styled/Service.css';
/* import ServiceTopImg from '../../assets/Service-img/service-top-img.png'; */
import Logo from '../../assets/image/robotos-logo.png';

const Service = () => {
    return (
        <div id='service' className='service-wrap'>
            <div className='service-top-img-wrap'>
                <div className='service-top-contents'>
                    <div className='service-content-left'>
                        <div className='left-content-column'>
                            <h2>We Connect</h2>
                            <p>매칭 전문 플랫폼 화진로보틱스</p>
                        </div>
                    </div>
                    <div className='service-content-center'></div>
                    <div className='service-content-right'>
                        <h3>상상하는 모든 거래가<br/>가능해지는곳</h3>
                    </div>
                </div>
            </div>
            <div className='service-center-contents'>
                <div className='service-center-top'>
                    <img src={Logo} alt="logo"/>
                    <div className='service-center-text'>
                        <h3>
                            사람과 사람을 잇는 "다리"<br/>
                            화진로보틱스가 되어드리겠습니다
                        </h3>
                        <p>
                            화진로보틱스는 견적 플랫폼으로서<br/>
                            판매자와 구매자 모두에게 만족스러운 고객경험을 선사하고자 합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;