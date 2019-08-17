import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Favorite from '@material-ui/icons/Favorite'
import Axios from 'axios'
import link from '../../../link';

const getProducts = async (setProducts,shopId) => {
  let pro = await Axios.get(`${link}/api/product`)
  pro = pro.data.filter(i => i.shop._id == shopId);
  setProducts(pro);
}

const useStyles = makeStyles({
  card: {
    maxWidth: 'auto',
    borderRadius: 0,
    flex: '0 0 auto',
    margin: '0 10px',
    position: 'relative'
  },
  media: {
    height: 140,
  },
  heart:{
    color: 'rgb(245,0,87)',
    '&:focus':{
      outline: '0'
    },
  },
  buy: {
    color: 'black',
    padding: '5px 20px',
    borderRadius: '100px',
    transition: '.2s',
    marginLeft: 'auto',
    '&:hover':{
      background: 'rgb(245,0,87)',
      color: '#ffffff',
    },
    '&:focus':{
      outline: '0'
    }
  },
  trand: {
    position: 'absolute',
    top: '7px',
    left: '7px',
    background: 'rgb(245,0,87)',
    color: '#ffffff',
    minWidth: '70px',
    padding: '5px 15px',
    fontWeight: '600',
    letterSpacing: '3px',
    fontSize: '15px',
    textTransform: 'uppercase'
  }
});

const SingleCart = ({favourites,classes,_id,image,title,description,price,shop}) => {
  const [isFavourite,setIsFavourite] = useState(false);

  const getFavourite = async (e) => {
    const get = await Axios.post(`${link}/api/customar/favourite`,{product: _id})
    if(get) setIsFavourite(!isFavourite);
  }

  useEffect(() => {
    if(favourites){
      favourites.map(i => {
        if(i.product._id === _id){
          setIsFavourite(true);
        }
      })
    }
  },[])

  return(
    <div style={{minWidth: '350px',margin: "0 10px"}}>
      <div className="card border-0 rounded-0">
        <img src={`${link}/${image}`} className="card-img-top rounded-0" alt={title} />
        <div className="card-body">
          <h4><a href={`/product/${_id}`} className="text-dark">{title}</a></h4>
          <h6 className="text-center">${price}</h6>
            <div className="item-footer d-flex">
              <div className="w-50 ml-2 mt-2">
                <IconButton onClick={getFavourite} style={{color: isFavourite ? 'rgb(245,0,87)' : ''}}>
                  <Icon>favorite</Icon>
                </IconButton>
                <small style={{display: 'block',fontSize: '12px'}} className="text-muted">add to favourite</small>
              </div>
              <button style={{height: '30px'}} className="ml-auto btn btn-sm my-auto px-3">Buy now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

const getProfile = async (setFavourites) => {
  const fav = await Axios.get(`${link}/api/customar/me`)
  setFavourites(fav.data.favourite);
}

const Trand = ({tag,styles}) => (
  <div className={styles}>{tag}</div>
)
const AlsoLike = (props) => {
  const [products,setProducts] = useState(null)
  const [favourites,setFavourites] = useState([])
  const [isFavourite,setIsFavourite] = useState(false);

  useEffect(() => {
    getProfile(setFavourites);
  },[])

  useEffect(() =>{
    getProducts(setProducts,props.shopId);
  },[])
  const classes = useStyles();
  return (
    <div className="col-12 py-3">
      <h3 className="my-4 ml-5">You may also like</h3>
      <LikeStyle className="li-pro m-3 py-4 justify-content-center" style={{display: 'flex',flexWrap: 'nowrap',overflowX: 'auto'}}>
        {
          products && products.map((i,key) => {
            return <SingleCart key={key} {...i} classes={classes} favourites={favourites}/>
          })
        }
      </LikeStyle>
    </div>
  )
}

const LikeStyle = styled.div`
::-webkit-scrollbar {
  height: 4px;

}
::-webkit-scrollbar-track {
  background: #e3e3e3;

}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export default AlsoLike
