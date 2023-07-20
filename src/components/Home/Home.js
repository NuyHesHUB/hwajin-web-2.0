import React from 'react';
import '../../styled/Home.css';
import Building from '../../image/building.jpg';
import Car from '../../image/car.jpg';
import Hr from '../../image/hr.jpg';
import Hotel from '../../image/hotel.jpg'

const Home = () => {
    return (
        <div className='home-wrap'>
            <div className='img-wrap'>
                <div className='title-wrap'>
                    <h2>화진로보틱스에서 <br/>우리는 혁신을 만듭니다.</h2>
                    <hr/>
                    <h4>도전과 혁신으로 사업영역을 확대하고 있습니다.</h4>
                </div>
                <img className='slide-img' style={{width:'100vw',height:'700px'}} src={Building} alt="Car"/>
            </div>
            <div style={{margin:'80px 0'}}>
                <h1 style={{textAlign:'center'}}>BUSINESS</h1>
                <div>
                    <ul style={{listStyle:'none',display:'flex',padding:'0',textAlign:'center'}}>
                        <li style={{display:'inline-block', width:'30%'}}><img style={{width:'100%'}} src={Car} alt="Car"/></li>
                        <li style={{display:'inline-block', width:'30%'}}><img style={{width:'100%'}} src={Hr} alt="Hr"/></li>
                        <li style={{display:'inline-block', width:'30%'}}><img style={{width:'100%'}} src={Hotel} alt="Hotel"/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;