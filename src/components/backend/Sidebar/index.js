import React from 'react'
import styled from 'styled-components';
import NavItem from './NavItem';



const navitem = [
  {
    items: [{title: 'Sales',to: '/'},{title: 'Sales',to: '/'},{title: 'Sales',to: '/'}],
    title: {name: 'Dashboard1',icon: 'fa fa-user'}
  },
  {
    items: [{title: 'Sales',to: '/'},{title: 'Sales',to: '/'},{title: 'Sales',to: '/'}],
    title: {name: 'Dashboard2',icon: 'fa fa-fw'}
  },
  {
    items: [{title: 'Sales',to: '/'},{title: 'Sales',to: '/'},{title: 'Sales',to: '/'}],
    title: {name: 'Dashboard3',icon: 'fa fa-fw'}
  },
]
const Sidebar = (props) => {
  return (
    <SidebarStyle id="dashboard_sidebar">
      <div className="menu_list">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#sidebarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="sidebarNav">
            <ul className="navbar-nav flex-column w-100">
              <li class="nav-divider">Menu</li>
              {
                navitem.map((data,i) => {
                  return <NavItem key={i} items={data.items} title={data.title}/>
                })
              }
            </ul>
          </div>
        </nav>
      </div>
    </SidebarStyle>
  )
}

const SidebarStyle = styled.div`
  position: fixed;
  width: 264px;
  height: 100%;
  top: 56px;
  overflow: auto;
  box-sizing: border-box;
  color: #a4aadb;
  display: block;
  background: #0E0C28;
  .nav-divider{
    font-weight: bold;
    padding: 10px 0;
  }
  .menu_list{
    position: relative;
    overflow: hidden;
    width: auto;
    height: 100%;
  }
`

export default Sidebar
