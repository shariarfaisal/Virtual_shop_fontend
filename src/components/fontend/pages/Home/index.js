import React,{useContext,useState,useEffect} from 'react'
import Layout from '../../Layout'
import styled from 'styled-components';
import Filter from './Filter/index'
import Products from './Products'
import Featured from './Featured'
import Subscribe from './Subscribe'
import Trand from './Trand';
import CoreContextProvider , {CoreContext} from '../../../context/CoreContext';

const productsFilter = (context,setProducts) => {
  setProducts(context.products);
}

const mostPopularFilter = (context,setMostPopular) => {
  setMostPopular(context.products.slice(1,5))
}


const Home = (props) => {
  const [products,setProducts] = useState([])
  const [mostPopular,setMostPopular] = useState([])
  const context = useContext(CoreContext);

  useEffect(() => {
    productsFilter(context,setProducts);
  })

  useEffect(() => {
    mostPopularFilter(context,setMostPopular);
  })

  return (
    <CoreContextProvider>
      <Layout>
        <div id="content" className="row">
          <Filter />
          <Products products={products}/>
          <Trand products={mostPopular}/>
          <Featured />
          <Subscribe />
        </div>
      </Layout>
    </CoreContextProvider>
  )
}


export default Home
