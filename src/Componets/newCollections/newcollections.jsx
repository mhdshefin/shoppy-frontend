import React, { useEffect, useState } from 'react'
import './newcollections.css'
import Items from '../items/items'

const Newcollections = () => {

const [new_collections,setNewCollections] = useState([])

useEffect(()=>{
fetch('https://shoppy-backend-pt.onrender.com/newcollections').then((res)=>res.json()).then((data)=>setNewCollections(data))
},[])

  return (
    <div className='new-collections'>
<h1>NEW COLLECTIONS</h1>
<hr />
<div className="collections">
{new_collections.map((items,index)=>{
    return <Items key = {items.index} id = {items.id} name = {items.name} image = {items.image} new_price = {items.new_price} old_price = {items.old_price} />
})}
</div>
    </div>
  )
}

export default Newcollections

