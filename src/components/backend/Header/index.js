import React from 'react'
import Search from './Search';
import Nav from './Nav';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <HeaderStyle id="admin_header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search />
          <Nav />
        </div>
      </nav>


    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  .navbar{
    background: #ffffff !important;
  }
`

export default Header
