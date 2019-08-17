import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton'
import BrandList from './BrandList';
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

 function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Profile history={props.history}/>
      <Nav />
      <BrandList />
    </div>
  );


  return (
    <div>
      <Button className="mr-2" onClick={toggleDrawer('left', true)}><MenuIcon style={{color: '#ffffff'}}/></Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

const Nav = (props) => {
  return (
    <StyleNav className="nav d-flex flex-column">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/brands">Brands</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/favourits">Favourits</a>
      </li>
    </StyleNav>
  )
}

const StyleNav = styled.ul`
  li a{
    font-size: 16px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    letter-spacing: 2px;
  }
  li a:hover{
    color: #F50057 !important;
  }
`

const Profile = ({history}) => {
  const getLogout = (e) => {
    e.preventDefault();
    const token = localStorage.removeItem('virtual_customar_token');
    history.push('/login');
  }
  return (
    <StyleProfile>
      <a href="/profile" style={{textDecoration: 'none',color: 'black'}}>
        <span style={{fontWeight: 'bold',letterSpacing: '3px',fontSize: '20px'}}>Profile</span>
      </a>
      <p style={{cursor: 'pointer'}} onClick={getLogout} className="my-3">logout</p>
    </StyleProfile>
  )
}

const StyleProfile = styled.div`
  padding: 20px 0 5px 20px;
  background: #eee;
  a:hover span{
    color: #F50057;
  }
  p{
    font-weight: 600;
  }
  p:hover{
    color: #6c757d !important;
  }
`
export default withRouter(TemporaryDrawer)
