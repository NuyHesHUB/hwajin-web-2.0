import React from 'react';
import '../../styled/Platform.css';
import Bike from '../../assets/Platform-img/platform-bike.jpg';
/* import Car from '../../assets/Platform-img/platform-car.jpg' */

const Platform = () => {
    return (
        <div className='platform-wrap'>
            <div className='platform-box'>
                <div className='platform-item'>
                    <div className='item-contents'>
                        <h2>electric motorcycle</h2>
                    </div>
                    <div className='item-bg'>
                        <img src={Bike} alt="bike"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform;