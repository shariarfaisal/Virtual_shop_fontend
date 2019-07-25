import React from 'react'
import Rating from './Rating';

const ProductRreview = (props) => {
  return (
    <div className="product-previews pl-5">
      <h3>Product Previews</h3>
        <ul className="list-unstyled bg-light p-3">
          <li className="media mt-3">
            <div className="ml-2">
              <Rating  rating={4}/>
              <p className="text-muted m-0">Shariar Faisal</p>
              <small className="text-muted">3 hours ago</small>
            </div>
            <div className="media-body ml-5 px-5">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Consectetur dignissimos officiis aspernatur facere exercitationem consequatur, provident omnis, asperiores esse vitae!</p>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default ProductRreview
