import React,{useEffect} from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem';
import FavouriteHoc from './FavouriteHoc'

const Products = ({products,brands}) => {
  return (
    <BorderDisplayStyle id="product-display" className="col-12 col-md-10 mx-auto">
        <div className="card-columns pb-5">
          {
            products.map((i,key) => <ProductItem  key={key} {...i.product}/>)
          }
        </div>
    </BorderDisplayStyle>
  )
}

const BorderDisplayStyle = styled.div`
  .card{
    border-radius: 0;
    .card-img-top{
      border-radius: 0;
    }
    .card-body{
      button{
        border-radius: 100px;
      }
      button:focus{
        outline: 0;
      }
      .item-footer{

      }
    }
  }
`

export default FavouriteHoc(Products)
