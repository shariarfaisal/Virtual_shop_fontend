import React from 'react'
import Layout from '../../Layout'
import Details from './Details'
import ProductImage from './ProductImage';
import ProductRreview from './ProductRreview';
import AddReview from './AddReview';
import AlsoLike from './AlsoLike';
import ProductDetailsHoc from './ProductDetailsHoc'

const ProductDetails = ({product}) => {
  return (
    <Layout>
      <div id="product-details" className="row">
        <div id="pic-with-details" className="col-12">
          <div className="card border-0">
            <div className="card-body row">
              <ProductImage image={product.image}/>
              <Details {...product}/>
            </div>
          </div>
        </div>
        <div className="col-12 mt-2">
          <div className="card border-0">
            <div className="card-body">
              <ProductRreview />
              <hr />
              <AddReview />
            </div>
          </div>
        </div>
        <AlsoLike shopId={product.shop._id} catId={product.category._id}/>
      </div>
    </Layout>
  )
}

export default ProductDetailsHoc(ProductDetails)
