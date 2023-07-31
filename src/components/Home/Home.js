/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../../styled/Home.css';
import Logo from '../../assets/image/h_logo.png';
import Bike from '../../assets/Home-img/bike-img.png';
import Robot from '../../assets/Home-img/robot-img.png';
import Hr from '../../assets/Home-img/hr-img.png';
import Etc from '../../assets/Home-img/etc-img.png';

const Home = () => {
    return (
        <div id="home" className='home-wrap'>
                <div className='top-home-box'>
                    <div className='home-img-wrap'>
                        {/* <h2>중개플랫폼의 패러다임,<br/><u>화진 로보틱스</u>가 바꿔나갑니다</h2> */}
                        <div className='home-img-text'>
                            <h2>한발짝 더 다가가는, 사람과 사람이 <u>빛나는 연결</u>의 시작</h2>
                            {/* <h3><u>화진 로보틱스</u></h3> */}
                        </div>
                        <div className='scroll-down-wrap'>
                            <div className='scroll-down'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className='scroll-text'>Scroll Down</div>
                    </div>
                </div>
                <div className='contents-wrap'>
                    <img src={Logo} alt='logo'/>
                    <h2>화진 로보틱스는 자사 솔루션 및 플랫폼을 준비 중인 스타트업입니다.</h2>
                    <p>개인의 다양한 가능성이 의미 있는 성공으로 꽃피울 수 있도록<br/>서비스와 기술 플랫폼을 통해 더 가까이 서포트합니다.</p>
                    <div className='content-tag'>
                        <ul>
                            <li>#기술</li>
                            <li>#변화</li>
                            <li>#혁신</li>
                        </ul>
                    </div>
                    <div className='service-wrap'>
                        <div className='service-img-wrap'>
                            <div className='large-img-wrap text-ani number1'>
                                <img src={Robot} alt="robotimage" />
                                <h3>로봇</h3>
                            </div>
                            <div className='column-wrap'>
                                <div className='small-img-wrap text-ani number1'>
                                    <img src={Bike} alt="bikeimage"/>
                                    <h3>전기차.오토바이</h3>
                                </div>
                                <div className='small-img-wrap text-ani mt18 number2'>
                                    <img src={Hr} alt="hrimage"/>
                                    <h3>아웃소싱</h3>
                                </div>
                            </div>
                            <div className='large-img-wrap text-ani number2 mobile-none'>
                                <img src={Etc} alt="etcimage"/>
                                <h3>기타</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='bottom-content-wrap'>
                    <h2>기술로 다양성을 꽃피우는 플랫폼</h2>
                    <p>우리는 다양한 개인들이 의미 있는 성공을 이룰 수 있도록 서비스와 기술 플랫폼을 제공하여 더 가까이 지원합니다.</p>
                </div>
                <div id="about"  className='divider'></div>
                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf6dlrvjzw4o7h7MUMh44l1UxDTeYaFZDaXBvQ41CsG1MVi2A/viewform?embedded=true" width="640" height="1300" frameborder="0" marginheight="0" marginwidth="0">로드 중…</iframe> */}
        </div>
    );
};

export default Home;