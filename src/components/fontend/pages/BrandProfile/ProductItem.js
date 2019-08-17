import React from 'react'
import link from '../../../link'

const ProductItem = ({image,title,_id,price}) => (
  <div className=" card border-0 rounded-0" >
  <img src={`${link}/${image}`} className="card-img-top rounded-0" alt="" />
    <div className="card-body">
      <h5><a className="text-dark" href={`/product/${_id}`}>{title}</a></h5>
      <p className="text-center"><strong>${price}</strong></p>
    </div>
  </div>
)

export default ProductItem
