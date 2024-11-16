import React, { useEffect, useState } from 'react'
import './popular.css'
import Items from '../items/items'

const Popular = () => {

  const [popular_product,setPopular_product] = useState([])

  useEffect(()=>{
  fetch('https://shoppy-backend-pt.onrender.com/popularinwomen').then((res)=>res.json()).then((data)=>setPopular_product(data))
  },[])

  return (
    <div className='popular'>
<h1>POPULAR IN WOMEN</h1>
<hr />
<div className="popular-item">
    {popular_product.map((item,index)=>{
        return <Items key = {index} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
    })}
</div>
    </div>
  )
}


export default Popular