import React from 'react'
import './newsletter.css'

const newsLetter = () => {
  return (
    <div className='newsletter'>
<h1>GET EXCLUSIVE OFFER ON YOUR EMAIL</h1>
<p>Subscribe to our newsletter and stay updated</p>
<div>
    <input type="email" placeholder='Enter your Email' />
    <button>Subscribe</button>
</div>

    </div>
  )
}

export default newsLetter