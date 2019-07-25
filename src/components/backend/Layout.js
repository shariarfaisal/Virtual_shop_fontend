import React from 'react'
import DashboardStyle from './DashboardStyle';
import Header from './Header/index';
import Sidebar from './Sidebar/index';

const Layout = ({children}) => {
  return (
    <DashboardStyle>
        <Header />
        <Sidebar />
        <div id="dashboard_wrapper container-fluid" style={{
            background: '#EEEEF5',
            minHeight: '100%',
            marginLeft: '264px',
            marginTop: '56px',
            position: 'fixed',
            width: '100%'
          }}>
          {children}
        </div>
    </DashboardStyle>
  )
}

export default Layout
