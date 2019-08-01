import React from 'react'
import Product from './Product';


const ProductWrapper = ({products,setIsUp}) => {

  return products.map((i,key) => <Product  key={key} {...i} setIsUp={setIsUp}/>)
}

export default ProductWrapper
