import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Favorite from '@material-ui/icons/Favorite'
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  cart:{
    borderRadius: '100px',
    '&:hover':{
      background: '#f50057'
    },
    '&:focus':{
      outline: '0'
    }
  },
  wish:{
    color: '#f50057',
    '&:focus':{
      outline: '0'
    }
  },
  wc:{
    color: '#f50057'
  },
  wtc:{
    color: 'gray'
  }
}))


const Footer = (props) => {
  const [heart,setHeart] = useState(true);
  const classes = useStyle()

  return (
    <div className="d-flex justify-content-around my-5">
      <Button className={classes.cart} variant="contained">add to cart</Button>
        <div className=" d-flex">
          <IconButton onClick={e => setHeart(!heart)} className={classes.wish}><Favorite className={heart ? classes.wc : classes.wtc} /></IconButton>
          <p className="ml-3 mt-2">add to wishlist</p>
        </div>
    </div>
  )
}

export default Footer
