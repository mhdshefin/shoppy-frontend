import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Contexts/ShopContext'


const ProductDisplay = (props) => {
    const { Product } = props;
    const {AddToCart} = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={Product.image} alt="" className="productdisplay-img-main" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{Product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(1128)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old">${Product.old_price}</div>
                    <div className="productdisplay-right-price-new">${Product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Material: 100% pure cotton for a soft, breathable feel.Fit: Regular fit, ideal for all body types.Double-stitched seams for extra durability.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                 <button onClick={()=>{AddToCart(Product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category:</span>Mens , T-shirt </p>
                <p className="productdisplay-right-category"><span>Tag:</span>Black , Cotton </p>

            </div>
        </div>
    )
}

export default ProductDisplay