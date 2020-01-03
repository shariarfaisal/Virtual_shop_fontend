import React,{useContext,useState,useEffect} from 'react'
import Layout from '../../Layout'
import styled from 'styled-components';
import Products from './Products'
import Featured from './Featured'
import Trand from './Trand';
import DataHoc from '../DataHoc'
import BrandsDisplay from './BrandsDisplay';


const Home = ({products,profile,brands}) => {

  return (
      <Layout>
        <div id="content" className="row">
          <BrandsDisplay brands={brands} follows={profile.follow}/>
          <Products products={products} profile={profile}/>
          {/*<Trand products={products.slice(0,3)}/>*/}
          <Featured />
        </div>
      </Layout>
  )
}

export default DataHoc(Home)
