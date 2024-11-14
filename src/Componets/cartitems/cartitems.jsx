import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Contexts/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'


const CartItems = () => {
  const { all_product, CartItems, RemoveFromCart , getTotalCartAmount } = useContext(ShopContext)
  return (
    <div className='CartItems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {

          return <div>
            <div className="cartitems-format cartitem-format-main">
              <img className='carticon-product-icon' src={e.image} alt="" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitems-quantity'>{CartItems[e.id]}</button>
              <p>${e.new_price*CartItems[e.id]}</p>
              <img className='carticon-remove-icon' src={remove_icon} onClick={() => { RemoveFromCart(e.id) }} alt="" />
            </div>
            <hr />
          </div>
        }
        return null
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <Link to={'/placeorder'}> <button>PROCEED TO CHEACKOUT</button></Link>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-box">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
