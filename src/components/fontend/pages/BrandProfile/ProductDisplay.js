import React from 'react'
import BrandProfileHoc from './BrandProfileHoc'
import ProductItem from './ProductItem'

const ProductDisplay = ({products,catId,proFilter,brandId,proFWC}) => {
  return (
    <div className="col-md-9 bg-light p-3" style={{minHeight: '400px'}}>
      <div className="card-columns">
      {
        !catId ?
          proFilter(products,brandId).map((i,key) => <ProductItem key={key} {...i} />) :
          proFWC(products,brandId,catId).map((i,key) => <ProductItem key={key} {...i} />)
      }
      </div>
    </div>
  )
}

export default BrandProfileHoc(ProductDisplay)
