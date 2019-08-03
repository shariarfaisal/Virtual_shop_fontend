import React from 'react'
import Product from './Product';


const ProductWrapper = ({products,setIsUp}) => {

    return products.map((i,key) => <Product  key={key} {...i} setIsUp={setIsUp}/>)

}

const Loading = () => (
  <div className="col-12 text-muted bg-light text-center my-4 py-3" style={{
      borderTop: '1px solid rgb(235, 235, 235)',
      borderBottom: '1px solid rgb(235, 235, 235)',
      fontWeight: '600'
    }}>
    <h5>Loading...</h5>
  </div>
)

export default ProductWrapper
