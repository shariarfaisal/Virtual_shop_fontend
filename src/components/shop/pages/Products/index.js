import React from 'react'
import Layout from '../../Layout';
import AddProduct from './AddProduct';
import Product from './Product';

const product = {
  id: 1,
  title: 'This is Title',
  image: 'img/img2.jpg',
  description: 'There will be title',
  time: '12-34-56',
  shopId: '',
  categoryId: '',
  price: 30,
  discountedPrice: 20
}





const Products = (props) => {
  return (
    <Layout>
      <div className="row p-3">
        <AddProduct />

        {
          [1,2,].map((i,key) => <Product key={key} {...product}/>)
        }
      </div>
    </Layout>
  )
}

export default Products
