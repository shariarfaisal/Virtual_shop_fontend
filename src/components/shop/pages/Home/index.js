import React,{useState,useContext,useEffect}  from 'react'
import Layout from '../../Layout';
import AddProduct from '../ProductHandler/AddProduct/index';
import ProductHandler from '../ProductHandler/index';
import {CoreContext} from '../../../context/CoreContext';


const productFilter = (context,setProducts,category,setIsProduct) => {
    if(category){
      const products = context.products.filter(i => {
        return i.category.name.toLowerCase() == category.toLowerCase()
      })
      setProducts(products);
    }else{
      setProducts(context.products);
    }
}

const Home = (props) => {
  const context = useContext(CoreContext)
  const [products,setProducts] = useState([]);
  const [isUp,setIsUp] = useState(null);
  useEffect(()=>{
    productFilter(context,setProducts,props.match.params.category)
    setIsUp(context.setIsUp);
  })

  return (
    <Layout>
      <AddProduct context={context}/>
      <ProductHandler  products={products} setIsUp={setIsUp}/>
    </Layout>
  )
}

export default Home
