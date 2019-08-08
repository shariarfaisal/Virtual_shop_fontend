import React from 'react'
import Menu from '@material-ui/core/Menu';
import styled from 'styled-components';
const NavigationMenu = ({id,anchorEl,handleClose}) => {

const NavItem = ({children}) => (
  <li className="nav-item">
    <a href="/" className="nav-link text-secondary">{children}</a>
  </li>
)

  return (
    <div>
      <Menu
          id={id}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{marginTop: '50px'}}
        >
          <NavMenu className="nav-menu row">
            <div className="col-4">
              <ul className="nav flex-column">
                <NavItem>Shirt</NavItem>
                <NavItem>Dresses</NavItem>
                <NavItem>Skirt</NavItem>
                <NavItem>T-shirt</NavItem>
                <NavItem>Shoe</NavItem>
              </ul>
            </div>
          </NavMenu>
      </Menu>
    </div>
  )
}

const NavMenu = styled.div`
  width: 100vh;
  height: 40vh;
  .nav-link{
    transition: .2s;
  }
  ul li .nav-link:hover{
    color: black !important;
    font-weight: 600;
  }
`

export default NavigationMenu
