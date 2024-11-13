import React from 'react'
import Banner from '../Componets/banner/banner'
import Popular from '../Componets/popular/popular'
import Offers from '../Componets/Offers/offers'
import Newcollections from '../Componets/newCollections/newcollections'
import NewsLetter from '../Componets/newsLetter/newsLetter'

const Shop = () => {
  return (
    <div>
      <Banner />
      <Popular />
      <Offers />
      <Newcollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop