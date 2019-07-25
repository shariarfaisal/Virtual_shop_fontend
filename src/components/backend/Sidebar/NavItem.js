import React from 'react'
import styled from 'styled-components'

const NavItem = ({items,title,key}) => {
  return (
    <NavItemStyled className="nav-item my-1">
      <a  className="nav-link active " href="#" data-toggle="collapse" aria-expanded="false" data-target={`#submenu-${title.name}`} aria-controls={`submenu-${title.name}`}>
        <i className={`${title.icon} mx-2`}></i>{title.name}<span className="badge badge-success">6</span>
      </a>
      <div id={`submenu-${title.name}`} className="submenu collapse">
        <ul className="nav flex-column">
        {Object.keys(items).map((item,key) => (
          <li key={key} className="nav-item">
            <a className="nav-link ml-4" href={items[item].to}>{items[item].title}</a>
          </li>
        ))}
        </ul>
      </div>
    </NavItemStyled>
  )
}

const NavItemStyled = styled.div`
  color: #a4aadb;
  background: #24274a;
  border-radius: 2px;
  .submenu{
    li .nav-link{
      font-weight: 600;
      color: #a4aadb !important;
      text-transform: capitalize
    }
  }
  .submenu .nav .nav-item .nav-link{
    color: #a4aadb !important;
  }

`

export default NavItem
