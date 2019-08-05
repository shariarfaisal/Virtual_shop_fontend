import React,{useState,Fragment,useContext} from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import styled from 'styled-components';
import {ThemeContext} from '../../context/ThemeContext'
import link from '../../../link';
import {Link} from 'react-router-dom';

const Brand = ({name,id}) => (
  <div className="brand">
    <Link to={`/brand/${id}`}>{name}</Link>
  </div>
)
const ProductItem = ({_id,title,time,shop,description,category,cols,price,image}) => {
    const theme = useContext(ThemeContext)
  const [heart,setHeart] = useState(false);
  return (
    <ProductItemStyle className={`col-md-${cols} p-3`}>
      <div className="card border-0 p-0">
        <div className="card-header p-0">
          <a title="view details" href={`/product/${_id}`}>
            <img src={`${link}/${image}`} className="card-img-top" alt="" />
          </a>
        </div>
        <div className="card-body border-0">
          <h4 className="text-center" style={theme.h2}>{title}</h4>
          <p className="text-center">${price}</p>
          <div className="item-footer d-flex">
            <div onClick={() => setHeart(!heart)} className="w-50 ml-2 mt-2">
              <IconButton>
                <Icon>favorite</Icon>
              </IconButton>
              <small style={{display: 'block',fontSize: '12px'}} className="text-muted">add to wishlist</small>
            </div>
            <button style={{height: '30px'}} className="ml-auto btn btn-sm my-auto px-3">Buy now</button>
          </div>
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
  .card{
    transition: .3s;
  }
  .card:hover{
    box-shadow: 0 5px 10px #d5d5d5;
  }

  .card-body{
    .btn:hover{
      background: rgb(245, 0, 87);
    }
  }
`

export default ProductItem
