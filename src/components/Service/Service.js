import React from 'react';
import '../../styled/Service.css';
/* import ServiceTopImg from '../../assets/Service-img/service-top-img.png'; */
import Logo from '../../assets/image/robotos-logo.png';
import Platform from '../../assets/Service-img/pay-img.png';
import Icon1 from '../../assets/Service-img/icon-01.png';
import Icon2 from '../../assets/Service-img/icon-02.png';
import Icon3 from '../../assets/Service-img/icon-03.png';

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
                        <h3>상상하는 모든 거래가<br/>가능해지는 곳</h3>
                    </div>
                </div>
                <div className='mobile-content'>
                    <h2>매칭 전문 플랫폼</h2>
                    <hr/>
                    <h3>화진로보틱스</h3>
                    <p>상상하는 모든 거래가<br/>가능해지는 곳</p>
                </div>
            </div>
            <div className='service-center-contents'>
                <div className='service-center-top'>
                    <img src={Logo} alt="logo"/>
                    <div className='service-center-text'>
                        <h3>
                            <u>사람과 사람을 잇는 <u className='color-wrap'>"</u>다리<u className='color-wrap'>"</u><br/>
                            <u className='color-wrap'>화진로보틱스</u></u>가 되어드리겠습니다
                        </h3>
                        <p>
                            화진로보틱스는 견적 플랫폼으로써<br className='none'/>
                            판매자와 구매자 모두에게 만족스러운 고객 경험을 선사하고자 합니다.
                        </p>
                    </div>
                </div>
                <div className='service-platform'>
                    <div className='platform-left-content'>
                        <h3>HWAJIN</h3>
                        <h2>
                            판매자도 구매자도 믿고 거래하는<br/>
                            No.1 <u>안심 견적 플랫폼</u>
                        </h2>
                        <p>
                            화진로보틱스는 전기차, 오토바이, 로봇, 아웃소싱 등<br/>
                            다양한 카테고리의 판매자와 구매자를 만날 수 있는 마켓 서비스입니다.<br/>
                            <br/>
                            우리는 신뢰를 슬로건으로 한 번에서 그치지 않고 장기적인 관계를 지향하는<br/>
                            고객만족의 서비스를 제공합니다.
                        </p>
                        <div className='service-detail-shape'>자세히보기</div>
                    </div>
                    <div className='platform-right-img'>
                        <img src={Platform} alt="platformimage"/>
                    </div>
                </div>
                <div className='service-card-wrap'>
                    <div className='service-card'>
                        <div className='card-top'>
                            <h2>
                                믿고 거래하는<br/>
                                <u>안심 견적 플랫폼</u>
                            </h2>
                            <p>
                                화진로보틱스는 전기차, 오토바이, 로봇, 아웃소싱 등<br/>
                                다양한 카테고리의 판매자와 구매자를 만날 수 있는<br/>
                                마켓 서비스입니다.<br/>
                                <br/>
                                내 정해진 예산에 딱 맞는 추천 상품을 찾아줍니다.
                            </p>
                        </div>
                        <div className='card-bottom'>
                            <img src={Icon1} alt="trust"/>
                        </div>
                    </div>
                    <div className='service-card'>
                        <div className='card-top'>
                            <h2>
                                <u>더 좋은 조건</u>에<br/>
                                구매해 보세요
                            </h2>
                            <p>
                                더 싸게 살 수없을까? 더 혜택이 좋은 곳은 없을까?<br/>
                                구매하실 때마다 고민하시지 않나요?<br/>
                                <br/>
                                화진로보틱스에선 예산에 맞는<br/>
                                상품을 제안해 드릴뿐만이 아니라,<br/>
                                더 좋은 조건으로 거래하실 수 있도록<br/>
                                서포트해드립니다.
                            </p>
                        </div>
                        <div className='card-bottom'>
                            <img src={Icon2} alt="trust"/>
                        </div>
                    </div>
                    <div className='service-card'>
                        <div className='card-top'>
                            <h2>
                                예산만 입력하면<br/>
                                <u>견적</u>을 빠르고 쉽게!
                            </h2>
                            <p>
                                더 이상 발품 팔 필요 없습니다!<br/>
                                이제 화진로보틱스에서 쉽게 거래하세요.<br/>
                                정해진 예산에서 딱 맞는 판매자를 만나세요.<br/>
                                <br/>
                                로보토스는 B2C, C2C 거래가 이루어질 수 있게<br/>
                                구매자와 판매자를 연결하는 허브 역할을 합니다.<br/>
                            </p>
                        </div>
                        <div className='card-bottom'>
                            <img src={Icon3} alt="trust"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='service-bottom-content'>
                <div className='service-bottom-text'>
                    <h2>
                        OUR<br/>
                        <u>BUSINESS</u>
                    </h2>
                    <p>
                        우리는 차별화된 고객 경험과 서비스로 온/오프라인 시장을 연결하고<br/>
                        데이터를 기반으로 최적의 비즈니스가 가능한 환경을 제공할 것입니다.
                    </p>
                </div>
                <div className='service-bottom-img'></div>
            </div>
        </div>
    );
};

export default Service;