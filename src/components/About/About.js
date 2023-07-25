import React from 'react';
import "../../styled/About.css";
import Hwajin from '../../assets/About-img/building.png';

const About = () => {
    return (
        <div className='about-wrap'>
            <div className='top-contents'>
                <h2>화진 로보틱스 소개</h2>
                <p>화진로보틱스는 자사 솔루션 및 플랫폼을 준비중인 스타트업입니다.</p>
            </div>
            <div className='about-img-wrap'>
                <img src={Hwajin} alt="building"/>
            </div>
            <div className='bottom-contents'>
                <h2>HWAJIN</h2>
                <p>
                    화진 로보틱스는 최고 수준의 기술과 서비스 품질을 바탕으로<br/>
                    아웃소싱 사업의 다각화를 통해 대한민국의 솔루션 탑 기업으로 도약할 것이며,<br/>
                    창의력을 실천하여 도전과 신뢰성을 바탕으로 매순간 새로운 패러다임을 창조하고<br/>
                    전 역량을 집중하겠습니다.
                </p>
            </div>
        </div>
    );
};

export default About;