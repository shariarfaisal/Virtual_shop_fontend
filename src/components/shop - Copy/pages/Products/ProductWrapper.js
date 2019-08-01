import React,{useState,useContext,useEffect} from 'react'
import Product from './Product';
import {ShopContext} from '../../context/ShopContext';

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

const productFilter = (category,context,setProducts) => {

    const products = context.products.filter(i => {
      return i.category.name.toLowerCase() == category
    })
    setProducts(products);

}

const ProductWrapper = ({category}) => {
  const context = useContext(ShopContext)
  const [products,setProducts] = useState([])
  useEffect(()=>{
    productFilter(category,context,setProducts)
  })

  return products.map((i,key) => <Product catName={category} key={key} {...i}/>)
}

export default ProductWrapper
