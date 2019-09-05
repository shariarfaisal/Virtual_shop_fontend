import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Favorite from '@material-ui/icons/Favorite'
import Axios from 'axios'
import link from '../../../link';


const ProductItem = ({favourites,_id,image,title,description,price,shop}) => {
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
    <div style={{maxWidth: '350px',margin: "0 10px"}}>
      <div className="card border-0 rounded-0">
        <img src={`${link}/${image}`} className="card-img-top rounded-0" alt={title} />
        <div className="card-body">
          <h4><a href={`/product/${_id}`} className="text-dark">{title}</a></h4>
          <h6 className="text-center">${price}</h6>
            <div className="item-footer d-flex">
              <div className="w-50 ml-2 mt-2">
                <IconButton onClick={getFavourite} style={{color: isFavourite ? 'rgb(245,0,87)' : ''}}>
                  <Favorite />
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

export default ProductItem
