import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 5,
    '&:focus':{
      outline: 0
    }
  },
});
const MaterialSearch = (props) => {
  const classes = useStyles();
  const [search,setSearch] = useState(props.match.params.search ? props.match.params.search : '')

  const submitHandler = e => {
    e.preventDefault();
    if(search !== ''){
      props.history.push(`/search/${search}`)
    }
  }
  return (
    <form onSubmit={submitHandler} style={{marginLeft: 'auto'}}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Products"
          inputProps={{ 'aria-label': 'Search Google Maps' }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      <IconButton type="submit" className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
}

export default withRouter(MaterialSearch)
