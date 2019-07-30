import React,{useEffect} from 'react'
import Header from './Header/index';
import Sidebar from './Sidebar/index';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import {withRouter} from 'react-router-dom'
import ShopContextProvider,{ShopContext} from './context/ShopContext';

const Layout = ({history,children}) => {

  useEffect(()=>{
    const token = localStorage.getItem('virtual_shopkeeper_token');
    if(!token){
      history.push('/shop/login')
    }
  })
  return (
    <LayoutStyling id="shop-wrapper">
      <div id="shop-header" className="fixed-top">
        <Header />
      </div>
      <div id="shop-content-wrapper">
        <Sidebar />
        <div id="shop-content">
          <Breadcrumb />
          <ShopContextProvider>
            {children}
          </ShopContextProvider>
        </div>
      </div>
    </LayoutStyling>
  )
}

const LayoutStyling = styled.div`
  #shop-content-wrapper{
    width: 100%;
    margin-top: 57px;
  }
  #shop-sidebar{
    width: 25%;
    height: 100%;
    position: fixed;

  }
  #shop-content{
    width: 75%;
    min-height: 700px;
    margin-left: 25%;
    background: #efefef;
  }
`

export default withRouter(Layout)
