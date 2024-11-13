import React, { useState } from 'react'
import './placeorder.css'
import {ShopContext} from '../../Contexts/ShopContext'
import { useContext } from 'react'
import paymethod from '../assets/raz.png'
import paymethod_cash from '../assets/cash_on_delivery.png'

const PlaceOrder = () => {
const {getTotalCartAmount } = useContext(ShopContext)
const [orderDetails,setOrderDetails] = useState({})

    return (
        <div className='container'>
            <div className="placeorder-left">
                <h1>DELIVERY INFORMATION</h1>
                <div className="placeorder-input">
                    <input type="text" name='name' placeholder='Your Name' />
                    <input type="email" name='email' placeholder='Email Address' />
                    <input type="text" name='street' placeholder='Street' />
                    <div className="placeorder-place">
                        <input type="text" name='city' placeholder='City' />
                        <input type="text" name='state' placeholder='State' />
                    </div>
                    <div className="placeorder-place">
                    <input type="number" name='zipcode' placeholder='Zipcode' />
                    <input type="text" name='country' placeholder='Country' />
                    </div>
                    <input type="number" name='phone' placeholder='Phone' />
                </div>
          </div>
          <div className="placeorder-right">
            <div className="placeorder-title">
          <h1>Cart Total</h1>
            </div>
          <div>
            <div className="placeorder-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="placeorder-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="placeorder-items">
              <h3>Total</h3>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <div className="payment-method">
            <h1>Payment Method</h1>
            <div className="pay">
            <div className="cashon-delivery">
            <img src={paymethod} alt="" />
            </div>
            <div className="cashon-delivery-cash">
            <img src={paymethod_cash} alt="" />
            <h3>Cash on delivery</h3>
            </div>
            </div>
          </div>
          <button onClick={()=>console.log('hello')}>Place Order</button>
        </div>
        </div>
    )
}

export default PlaceOrder

