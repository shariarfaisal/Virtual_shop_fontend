import React,{useEffect} from 'react'
import Header from './Header/index';
import Footer from './Footer/index';
import {withRouter} from 'react-router-dom'
import ProfileContextProvider from './context/ProfileContext';


const Layout = ({history,children}) => {

  useEffect(()=>{
    const token = localStorage.getItem('virtual_customar_token');
    if(!token){
      history.push('/login')
    }
  })

  return (
      <div id="layout">
        <div id="top">
          <Header />
        </div>
        <div id="middle" className="p-3" style={{background: 'rgba(243, 243, 243, 0.9)',minHeight: '70vh'}}>
          {children}
        </div>
        <div id="bottom">
          <Footer />
        </div>
      </div>
  )
}

export default withRouter(Layout)
