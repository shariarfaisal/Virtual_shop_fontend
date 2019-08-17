import React,{useState,Fragment,useContext,useEffect} from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import styled from 'styled-components';
import {ThemeContext} from '../../context/ThemeContext'
import link from '../../../link';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Brand = ({name,id}) => (
  <div className="brand">
    <Link to={`/brand/${id}`}>{name}</Link>
  </div>
)
const ProductItem = ({_id,title,time,shop,description,category,price,image,favourite}) => {
  const theme = useContext(ThemeContext)
  const [heart,setHeart] = useState(false);
  const [isFavourite,setIsFavourite] = useState(false);

  const getFavourite = async (e) => {
    const get = await Axios.post(`${link}/api/customar/favourite`,{product: _id})
    if(get) setIsFavourite(!isFavourite);
  }
  useEffect(() => {
    if(favourite){
      favourite.map(i => {
        if(i.product._id === _id){
          setIsFavourite(true);
        }
      })
    }
  },[])

  return (
      <ProductItemStyle className="card border-0 p-0 mb-4">
          <a title="view details" href={`/product/${_id}`}>
            <img src={`${link}/${image}`} className="card-img-top" alt="" />
          </a>
        <div className="card-body border-0">
          <h4 className="text-center" style={theme.h2}>{title}</h4>
          <p className="text-center">${price}</p>
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
        <Brand name={shop.name} id={shop._id}/>
      </ProductItemStyle>
  )
}

const ProductItemStyle = styled.div`
  position: relative;
  .brand{
    position: absolute;
    background: rgb(245,0,87);
    color: #ffffff;
    top: 22px;
    left: 20px;
    padding: 6px 20px;
    box-shadow: 0 0px 8px rgb(48, 48, 48);
    font-weight: 700;
    letter-spacing: 3px;

    a{
      color: #ffffff;
    }
  }

    transition: .3s;
  &:hover{
    box-shadow: 0 5px 10px #d5d5d5;
  }

  .card-body{
    .btn:hover{
      background: rgb(245, 0, 87);
    }
  }
`

export default ProductItem
