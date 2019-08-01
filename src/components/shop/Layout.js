import React,{useEffect} from 'react'
import Header from './Header/index';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom'
import RightSidebar from './RightSidebar/index'
const Layout = ({history,children}) => {

  useEffect(()=>{
    const token = localStorage.getItem('virtual_shopkeeper_token');
    if(!token){
      history.push('/shop/login')
    }
  })
  return (
      <LayoutStyling className="row align-items-stretch mx-auto">
        <Header />
          <div className="col-md-9" >
            <div className="row">
              <div className="col-md-8" style={{border:' 1px solid #ebebeb', minHeight: '100vh',borderTop: '0'}}>
                <div className="row">
                  <div className="col-12 sticky-top" style={{borderBottom: '1px solid #ebebeb',background: '#ffffff'}}>
                    <h3 className="pl-2  py-2" style={{fontSize: '20px',fontWeight: 'bold'}}>Header</h3>
                  </div>
                  <div className="col-12" style={{height: '100%'}}>
                    <div className="row">

                        {children}

                    </div>
                  </div>
                </div>
              </div>
              <RightSidebar />
            </div>
          </div>
      </LayoutStyling>
  )
}

const LayoutStyling = styled.div`
  font-family: 'Crimson Pro', serif;
  max-width: 90%;

`

export default withRouter(Layout)
