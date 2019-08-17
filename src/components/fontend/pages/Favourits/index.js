import React,{useState,useEffect} from 'react'
import Layout from '../../Layout'
import Products from './Products'
import Axios from 'axios';
import link from '../../../link';

const getFavourits = async (setProducts) => {
  const products = await Axios.get(`${link}/api/customar/me`)
  if(products){
    setProducts(products.data.favourite)
    console.log(products.data.favourite);
  }
}

const getBrands = async (setBrands) => {
  const brand = await Axios.get(`${link}/api/shop`)
  if(brand){
    setBrands(brand.data)
    console.log(brand.data)
  }
}



const Favourits = (props) => {
  const [products,setProducts] = useState(null);
  const [brands,setBrands] = useState(null);

  useEffect(() => {
    getFavourits(setProducts)
    getBrands(setBrands)
  },[])
  return (
    <Layout>
      <Products brands={brands} products={products}/>
    </Layout>
  )
}

export default Favourits
