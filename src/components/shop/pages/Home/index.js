import React,{useState,useContext,useEffect}  from 'react'
import Layout from '../../Layout';
import AddProduct from './AddProduct/index';
import ProductHandler from '../ProductHandler/index';
import {CoreContext} from '../../../context/CoreContext';


const productFilter = (context,setProducts) => {
    const products = context.products.filter(i => {
      return i.category.name.toLowerCase() == 'electronics'
    })
    setProducts(products);

}

const Home = (props) => {
  const context = useContext(CoreContext)
  const [products,setProducts] = useState([])
  const [isUp,setIsUp] = useState(null);

  useEffect(()=>{
    setProducts(context.products)
    setIsUp(context.setIsUp);
  })

  return (
    <Layout>
      <AddProduct context={context}/>
      <ProductHandler products={products} setIsUp={setIsUp}/>
    </Layout>
  )
}

export default Home
