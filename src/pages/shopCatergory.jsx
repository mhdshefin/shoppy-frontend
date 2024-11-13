import React, { useContext } from 'react'
import './css/shopcategory.css'
import { ShopContext } from '../Contexts/ShopContext'
import dropdown_icon from '../Componets/assets/dropdown_icon.png'
import Items from '../Componets/items/items'


const ShopCatergory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" srcset="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" srcset="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCatergory