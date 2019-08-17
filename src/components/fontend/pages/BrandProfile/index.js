import React from 'react'
import Layout from '../../Layout';
import BrandInfo from './BrandInfo'
import CategoryDisplay from './CategoryDisplay'
import ProductDisplay from './ProductDisplay'
import BrandProfileHoc from './BrandProfileHoc'

const BrandProfile = ({brand}) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-12 col-md-10 mx-auto">
          {brand && <div className="card border-0">
            <BrandInfo {...brand}/>
            <div className="card-body row">
              <CategoryDisplay />
              <ProductDisplay />
            </div>
          </div>}
        </div>
      </div>
    </Layout>
  )
}

export default BrandProfileHoc(BrandProfile)
