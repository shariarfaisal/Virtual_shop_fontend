import React from 'react'
import Layout from '../../Layout'
import styled from 'styled-components';
import Filter from './Filter/index'
import Products from './Products'
import Featured from './Featured'
import Subscribe from './Subscribe'
import Trand from './Trand';
const Home = (props) => {

  return (
    <Layout>
      <div id="content" className="row">
        <Filter />
        <Products />
        <Trand />
        <Featured />
        <Subscribe />
      </div>
    </Layout>
  )
}


export default Home
