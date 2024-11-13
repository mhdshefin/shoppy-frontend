import React from 'react'
import './offers.css'
import offer_image from '../assets/exclusive_image.png'


const offers = () => {
  return (
    <div className='offers'>
<div className="offers-left">
    <h1>Exclusive</h1>
    <h1>Offers For You</h1>
    <p>ONLY ON BEST SELLERS PRODUCT</p>
    <button>Cheack Now</button>
</div>
<div className="offers-right">
    <img src={offer_image} alt="" srcset="" />
</div>

    </div>
  )
}

export default offers