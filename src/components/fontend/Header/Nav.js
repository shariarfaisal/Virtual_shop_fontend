import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import NavigationMenu from './NavigationMenu'
const NavItem = (props) => (
  <li
    aria-controls={props.id}
    aria-haspopup="true"
    onClick={props.handleClick}
    className="nav-item px-3">
    <a onClick={(e => e.preventDefault())} className="nav-link" href="/">{props.children}</a>
  </li>
)

const Nav = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

 function handleClick(event) {
   setAnchorEl(event.currentTarget);
 }

 function handleClose() {
   setAnchorEl(null);
 }
  return (
    <Fragment>
      <button type="button" className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarNav" name="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-5" id="navbarNav">
        <ul className="navbar-nav  mr-auto">
          <NavItem
            id="women_menu"
            handleClick={handleClick}>
              Women
           </NavItem>
          <NavItem
            id="men_menu"
            handleClick={handleClick}>
              Men
           </NavItem>
          <NavItem
            id="kids_menu"
            handleClick={handleClick}>
              Kids
           </NavItem>
          <li>
              <a className="nav-link" href="/brand">Brand</a>
          </li>
        </ul>
        <NavigationMenu id="women_menu" anchorEl={anchorEl} handleClose={handleClose}/>
        <NavigationMenu id="men_menu" anchorEl={anchorEl} handleClose={handleClose}/>
        <NavigationMenu id="kids_menu" anchorEl={anchorEl} handleClose={handleClose}/>
      </div>
    </Fragment>
  )
}

export default Nav
