import React,{useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
// import {Link} from 'react-router-dom';
import Search from './Search'
import styled from 'styled-components'
import MaterialNav from './MaterialNav'
import MaterialSearch from './MaterialSearch'
import Sidebar from './Sidebar'

export default function Header(props) {
  const theme = useContext(ThemeContext)
  return (
    <NavStyled className="navbar navbar-dark bg-dark navbar-expand-lg uk-sticky p-0" uk-sticky="top:100; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
      <div className="container" style={{minHeight: '70px'}}>
        <Sidebar />
        <h1 className="navbar-brand my-auto"><a href="/"  style={{color: theme.color.danger,textDecoration: 'none'}}>SHOPMATE</a></h1>
        <MaterialSearch />
      </div>
      </NavStyled>
  )
}



const NavStyled = styled.nav`
  li{
    padding: 15px 0;
  }
  li:hover {
    margin-bottom: -2px;
    z-index: 100px;
    border-bottom: 2px solid #f3dc98 !important;
  }
  .nav-link{
    font-weight: 500;
    color: #ffffff !important;
  }
  .nav-item:hover .nav-link{
    color: #f3dc98 !important;
  }
`;
