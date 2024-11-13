import React from 'react'
import './relatedproducts.css'
import { ShopContext } from '../../Contexts/ShopContext'
import { useContext } from 'react'
import Items from '../items/items'


const RelatedProducts = (props) => {

    const { all_product } = useContext(ShopContext)
    const filteredProducts = all_product.filter(item => item.category === props.category).slice(0, 4)

    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-items">
                {
                    filteredProducts.map((item, index) => {
                        return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProducts 