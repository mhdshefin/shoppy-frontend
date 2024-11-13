import React from 'react'
import './footer.css'
import Footer_image from '../assets/logo_big.png'
import instagram from '../assets/instagram_icon.png'
import printrest from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const footer = () => {
  return (
    <div className='footer'>
<div className="footer-logo">
    <img src={Footer_image} alt="" srcset="" />
    <p>SHOPPY</p>
</div>
<ul className="footer-links">
    <li>Company</li>
    <li>Products</li>
    <li>Office</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className="footer-social-icons">
    <div className="footer-icon-container">
        <img src={instagram} alt="" srcset="" />
    </div>
    <div className="footer-icon-container">
        <img src={printrest} alt="" srcset="" />
    </div>
    <div className="footer-icon-container">
        <img src={whatsapp} alt="" srcset="" />
    </div>
</div>
<div className="footer-copyright">
    <hr />
    <p>Copyright @ 2024 All Right Reserved</p>
</div>
    </div>
  )
}

export default footer