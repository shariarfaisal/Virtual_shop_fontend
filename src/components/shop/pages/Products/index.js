import React from 'react'
import Layout from '../../Layout';
import AddProduct from './AddProduct';
import ProductWrapper from './ProductWrapper';


const Products = ({match}) => {
  const category = match.params.category
  return (
    <Layout>
      <div className="row justify-content-center p-3">
        <AddProduct category={category}/>
        <ProductWrapper category={category}/>
      </div>
    </Layout>
  )
}

export default Products
