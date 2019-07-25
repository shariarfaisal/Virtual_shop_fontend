import React from 'react'
import Header from './Header/index';
import Footer from './Footer/index';
const Layout = (props) => {


  return (
      <div id="layout">
        <div id="top">
          <Header />
        </div>
        <div id="middle" className="p-3" style={{background: 'rgba(243, 243, 243, 0.9)',minHeight: '400px'}}>
          {props.children}
        </div>
        <div id="bottom">
          <Footer />
        </div>
      </div>
  )
}

export default Layout
