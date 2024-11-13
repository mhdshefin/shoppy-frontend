import React from 'react'
import './banner.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import Hero_image from '../assets/hero_image.png'

const banner = () => {
    return (
        <div className='banner'>
            <div className="banner-left">
                <h2>NEW ARRIVALS </h2>
                <div>
                    <div className="banner-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" srcset="" />
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>

                <div className="banner-latest-btn">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt="" srcset="" />
                </div>

            </div>
            <div className="banner-right">
                <img src={Hero_image} alt="" srcset="" />
            </div>
        </div>
    )
}

export default banner