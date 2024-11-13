import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import Logo from '../assets/logo.png'
import Cart_icon from '../assets/cart_icon.png'
import { Link, } from 'react-router-dom'
import { ShopContext } from '../../Contexts/ShopContext'
import nav_dropdown from '../assets/nav_dropdown.png'

const Navbar = () => {
const {totalCartItem} = useContext(ShopContext)
  const [menu, setMenu] = useState("Shop")
  const menuRef = useRef()


const dropdown_toggle = (e) =>{
  menuRef.current.classList.toggle('nav-menu-visible')
  e.target.classList.toggle('open')
}

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>SHOPPY</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("Shop") }}><Link style={{ textDecoration: 'none',color: '#444'}} to='/'>Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Men") }}><Link style={{ textDecoration: 'none',color: '#444'}} to='/mens'>Men</Link> {menu === "Men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Women") }}><Link style={{ textDecoration: 'none',color: '#444'}} to='/womens'>Women</Link> {menu === "Women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Kids") }}><Link style={{ textDecoration: 'none',color: '#444'}} to='/kids'>Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        : <Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={Cart_icon} alt="" srcset="" /></Link>
        <div className="nav-cart-count">{totalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar