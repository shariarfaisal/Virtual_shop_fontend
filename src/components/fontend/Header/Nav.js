import React,{Fragment,useState,useContext,useEffect} from 'react'
import PropTypes from 'prop-types'
import NavigationMenu from './NavigationMenu'
import {ProfileContext} from '../context/ProfileContext';
import Menu from '@material-ui/core/Menu';
import {withRouter} from 'react-router-dom';

const NavItem = (props) => (
  <li
    aria-controls={props.id}
    aria-haspopup="true"
    onClick={props.handleClick}
    className="nav-item px-3">
    <a onClick={(e => e.preventDefault())} className="nav-link" href="/">{props.children}</a>
  </li>
)
const nameConverter = (name) => {
  const a = name.split(' ');
  const b = a.length-1;
  if(a.length >= 3){
    return a[b];
  }
  return a[0]+' '+a[1];

}


const Nav = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profile,setProfile] =useState({});
  const context = useContext(ProfileContext);

  useEffect(() => {
    setProfile(context.profile)
  })

 function handleClick(event) {
   setAnchorEl(event.currentTarget);
 }

 function handleClose() {
   setAnchorEl(null);
 }

 const getLogout = (e) => {
   e.preventDefault();
   const token = localStorage.removeItem('virtual_customar_token');
   props.history.push('/login');
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
          <li className="nav-item">
              <a className="nav-link" href="/brands">Brands</a>
          </li>
          <li className="nav-item dropdown">
            <a name="button" href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">{Object.keys(profile).length > 0 ? nameConverter(profile.name) : ''}</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/profile">profile</a>
              <a onClick={getLogout} className="dropdown-item" href="/login">logout</a>
            </div>
          </li>
        </ul>
        <NavigationMenu id="women_menu" anchorEl={anchorEl} handleClose={handleClose}/>
      </div>
    </Fragment>
  )
}

export default withRouter(Nav);
