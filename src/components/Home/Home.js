import React from 'react';
import '../../styled/Home.css';
import MainImg from '../../assets/Home-img/home-img.png';
import Logo from '../../assets/image/h_logo.png';
import Bike from '../../assets/Home-img/bike-img.png';
import Robot from '../../assets/Home-img/robot-img.png';
import Hr from '../../assets/Home-img/hr-img.png';
import Etc from '../../assets/Home-img/etc-img.png';

const Home = () => {
    return (
        <div className='home-wrap'>
            <div className='container'>
                <div className='home-img-wrap'>
                    <img src={MainImg} alt="mainimage"/>
                    <h2>중개플랫폼의 패러다임,<br/><u>화진 로보틱스</u>가 바꿔나갑니다</h2>
                </div>
                <div className='contents-wrap'>
                    <img src={Logo} alt='logo'/>
                    <h2>화진 로보틱스는 자사 솔루션 및 플랫폼을 준비중인 스타트업입니다.</h2>
                    <p>개인의 다양한 가능성이 의미있는 성공으로 꽃 피울 수 있도록<br/>서비스와 기술플랫폼을 통해 더 가까이 서포트(SUPPORT)합니다.</p>
                    <div className='content-tag'>
                        <ul>
                            <li>#기술1</li>
                            <li>#변화</li>
                            <li>#혁신</li>
                        </ul>
                    </div>
                    <div className='service-wrap' style={{marginTop:'92px',height:'428px'}}>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <div style={{ width: '356px', height: '433px', overflow: 'hidden', borderRadius: '62px', background: 'blue', position: 'relative' }}>
                                <img style={{ width: '356px', height: '433px'}} src={Robot} alt="robotimage" />
                                <h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '40px', margin: 0, padding: 0 }}>로봇</h3>
                            </div>
                            <div style={{textAlign:'center',display:'flex',flexDirection:'column'}}>
                                <div style={{overflow:'hidden',borderRadius:'62px',width:'365px',height:'205px'}}>
                                    <img style={{width:'100%'}} src={Bike} alt="bikeimage"/>
                                    
                                </div>
                                <div style={{overflow:'hidden',borderRadius:'62px',marginTop:'18px',width:'365px',height:'205px'}}>
                                    <img style={{width:'100%'}} src={Hr} alt="hrimage"/>
                                </div>
                            </div>
                            <div style={{ width: '356px', height: '433px', overflow: 'hidden', borderRadius: '62px', background: 'blue', position: 'relative' }}>
                                <img style={{width:'356px', height:'433px'}} src={Etc} alt="etcimage"/>
                                <h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '40px', margin: 0, padding: 0 }}>기타</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;