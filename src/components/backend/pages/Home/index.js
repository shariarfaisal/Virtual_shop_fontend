import React from 'react'
import Layout from '../../Layout';
import Topbar from './Topbar'
const Home = (props) => {
  return (
    <Layout>
      <div className="container-fluid" style={{padding: '30px 30px 60px 30px'}}>
        <Topbar />
      </div>
    </Layout>
  )
}

export default Home
