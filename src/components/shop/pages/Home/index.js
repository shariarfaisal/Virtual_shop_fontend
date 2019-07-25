import React from 'react'
import Layout from '../../Layout';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import AddCategory from './AddCategory';
import Category from './Category'




const Home = (props) => {
  return (
    <Layout>
      <div className="card-columns p-3" style={{height: '100%'}}>
        <AddCategory />
        {
          ['electronics','shirt','cloths','shooe'].map((i,key) => <Category key={key} name={i}/>)
        }
      </div>
    </Layout>
  )
}

export default Home
