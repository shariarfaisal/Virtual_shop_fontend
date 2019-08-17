import React,{useState,useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Favorite from '@material-ui/icons/Favorite'
import {makeStyles} from '@material-ui/core/styles';
import Axios from 'axios';
import link from '../../../link';

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

const getIsFav = async (setIsFavourite,id) => {
  const pro = await Axios.get(`${link}/api/customar/me`);
  if(pro.data){
    const match = pro.data.favourite.find(i => i.product._id === id);
    if(match){
      setIsFavourite(true)
    }else{
      setIsFavourite(false)
    }
  }
}


const Footer = (props) => {
  const [isFavourite,setIsFavourite] = useState(null);
  const classes = useStyle()

  useEffect(() => {
    getIsFav(setIsFavourite,props.id)
  },[])

  const getFavourite = async (e) => {
    const get = await Axios.post(`${link}/api/customar/favourite`,{product: props.id})
    if(get) setIsFavourite(!isFavourite);
  }

  return (
    <div className="d-flex justify-content-around my-5">
      <div className=" d-flex">
        <IconButton onClick={getFavourite} className={classes.wish}><Favorite className={isFavourite ? classes.wc : classes.wtc} /></IconButton>
        <p className="ml-3 mt-2">add to favourite</p>
      </div>
      <Button className={classes.cart} variant="contained">add to cart</Button>
    </div>
  )
}

export default Footer
