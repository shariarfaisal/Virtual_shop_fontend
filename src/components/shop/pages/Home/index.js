import React,{useState,useContext,useEffect}  from 'react'
import Layout from '../../Layout';
import AddProduct from '../ProductHandler/AddProduct/index';
import ProductHandler from '../ProductHandler/index';
import Axios from 'axios';
import link from '../../../link'


const getProduct = async (setProducts) => {
  const pro = await Axios.get(`${link}/api/product/shop`)
  setProducts(pro.data)
}

const productFilter = (products,category) => {
    if(category){
      return  products.filter(i => i.category.name.toLowerCase() == category.toLowerCase())
    }else{
      return products
    }
}

const Home = (props) => {
  const [products,setProducts] = useState(null);
  const [isUp,setIsUp] = useState(true);

  useEffect(() => {
    if(isUp){
      getProduct(setProducts)
      setIsUp(false)
    }
  })

  return (
    <Layout>
      <AddProduct />
      {products && <ProductHandler  products={productFilter(products,props.match.params.category)} setIsUp={setIsUp}/>}
    </Layout>
  )
}

export default Home
