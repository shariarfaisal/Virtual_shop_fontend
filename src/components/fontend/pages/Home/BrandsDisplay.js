import React from 'react'
import BrandItem from './BrandItem'

const BrandsDisplay = ({brands,follows}) => {
  return (
    <div style={{minHeight: '100px'}} className="p-2 mb-3 row mx-auto container justify-content-center">
      {brands.map((item,i) => <BrandItem key={i} {...item} follows={follows}/>)}
    </div>
  )
}

export default BrandsDisplay
