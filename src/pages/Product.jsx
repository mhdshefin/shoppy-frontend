import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Componets/Breadcrums/Breadcrums'
import { ShopContext } from '../Contexts/ShopContext'
import ProductDisplay from '../Componets/productDisplay/ProductDisplay'
import Descriptionbox from '../Componets/descriptionbox/descriptionbox'
import RelatedProducts from '../Componets/Relatedproducts/RelatedProducts'


const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrums Product={product} />
      <ProductDisplay Product={product} />
      <Descriptionbox />
      <RelatedProducts category={product.category} />
    </div>
  )
}

export default Product