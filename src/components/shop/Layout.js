import React from 'react'
import Header from './Header/index';
import Sidebar from './Sidebar/index';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';

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




const Layout = ({children}) => {
  return (
    <LayoutStyling id="shop-wrapper">
      <div id="shop-header" className="fixed-top">
        <Header />
      </div>
      <div id="shop-content-wrapper">
        <Sidebar />
        <div id="shop-content">
          <Breadcrumb />
          {children}
        </div>
      </div>
    </LayoutStyling>
  )
}

export default Layout
